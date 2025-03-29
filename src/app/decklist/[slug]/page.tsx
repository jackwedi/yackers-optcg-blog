import { readFileSync } from "fs";
import matter from "gray-matter";
import getPostMetadata from "../../../../utils/getPostMetadatas";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

function getPostContent(slug: string) {
  const folder = `decklists/`;
  const file = folder + `${slug}.md`;
  const content = readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("decklists");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const id = slug ?? "";

  return {
    title: `${id.toUpperCase} decklist`,
  };
}

export default async function DecklistPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await props.params).slug;
  const post = getPostContent(slug);
  const leaderImgKey = post.data.leader.split(" ")[0];

  return (
    <main>
      <Image
        className="m-auto"
        width={"100"}
        height={"100"}
        alt={post.data.leader}
        src={`https://pweuoelwazf73v8n.public.blob.vercel-storage.com/leaders/${leaderImgKey}_p1.png`}
      />
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
