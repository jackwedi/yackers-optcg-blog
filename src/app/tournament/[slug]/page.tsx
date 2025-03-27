import { readFileSync } from "fs";
import matter from "gray-matter";
import getPostMetadata, { IPost } from "../../../../utils/getPostMetadatas";
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

export function generateMetadata({ params }) {
  const id = params?.slug ? " . " + params?.slug : "";

  return {
    title: `Tournament ${id.replaceAll("-", "/").replaceAll("_", " ")}`,
  };
}

export default function TournamentPage(props: { params: IPost }) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
