import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
export interface IPost {
  title: string;
  date: string;
  score: string;
  players: number;
  bio: string;
  leader: string;
  slug: string;
}
export default function getPostMetadata(basePath: string) {
  const folder = basePath + "/";
  const files = readdirSync(folder);

  const markDownPosts = files.filter((file) => file.endsWith(".md"));
  console.log(markDownPosts);
  const posts: IPost[] = markDownPosts.map((filename) => {
    const fileContents = readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    const datas = matterResult.data;

    return {
      title: datas.title,
      date: datas.date,
      score: datas.score,
      players: datas.players,
      bio: datas.bio,
      leader: datas.leader,
      slug: filename.replace(".md", ""),
    };
  });

  return posts;
}
