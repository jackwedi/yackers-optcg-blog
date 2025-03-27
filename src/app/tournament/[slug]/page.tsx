import { readFileSync } from "fs";
import matter from "gray-matter";
import getPostMetadata from "../../../../utils/getPostMetadatas";
import Markdown from "markdown-to-jsx";

function getPostContent(slug: string) {
  const folder = `tournaments/`;
  const file = folder + `${slug}.md`;
  const content = readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("tournaments");
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

  const id = slug ? " . " + slug : "";

  return {
    title: `Tournament ${id.replaceAll("-", "/").replaceAll("_", " ")}`,
  };
}

export default async function TournamentPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await props.params).slug;
  const post = getPostContent(slug);
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
