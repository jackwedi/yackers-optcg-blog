import Link from "next/link";
import { IPost } from "../utils/getPostMetadatas";
import { formatDate } from "../utils/formatDate";
import Image from "next/image";

export default function PostCard(props: { post: IPost }) {
  const { post } = props;

  const [wins, loss] = props.post.score.split("-");
  const leaderImgKey = props.post.leader.split(" ")[0];

  return (
    <Link
      className="flex flex-col space-y-1 mb-4 "
      href={`/tournament/${post.slug}`}
    >
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <Image
          width={"50"}
          height={"50"}
          alt={post.leader}
          src={`https://pweuoelwazf73v8n.public.blob.vercel-storage.com/leaders/${leaderImgKey}_p1.png`}
        />
        <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
          {formatDate(post.date)}
        </p>
        <p className={wins > loss ? "text-green-700" : "text-red-700"}>
          [{props.post.score}]{" "}
        </p>{" "}
        <p>{post.store} </p>
      </div>
    </Link>
  );
}
