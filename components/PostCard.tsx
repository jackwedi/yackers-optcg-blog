import Link from "next/link";
import { IPost } from "../utils/getPostMetadatas";
import { formatDate } from "../utils/formatDate";
import Image from "next/image";

export default function PostCard(props: { post: IPost }) {
  const { post } = props;

  const [wins, loss] = props.post.score.split("-");
  const leaderImgKey = props.post.leader.split(" ")[0];
  const scoreColor =
    loss === "0" ? "bg-green-700" : wins > loss ? "bg-amber-700" : "bg-red-700";
  return (
    <Link
      className="flex flex-col space-y-1 mb-4"
      href={`/tournament/${post.slug}`}
    >
      <div className="w-full flex hover:opacity-80 border-1 rounded-md">
        <Image
          width={"100"}
          height={"100"}
          alt={post.leader}
          src={`https://pweuoelwazf73v8n.public.blob.vercel-storage.com/leaders/${leaderImgKey}_p1.png`}
        />
        <div className="m-1.5 w-full relative">
          <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
            {formatDate(post.date)}
          </p>
          <p className="">{post.meta}</p>
          <p className=" text-neutral-600 dark:text-neutral-400 absolute bottom-0">
            {post.store}
          </p>
        </div>
        <div
          className={
            " text-2xl rounded-r-md pl-5 pr-5 content-center align-middle " +
            scoreColor
          }
        >
          {wins}-{loss}
        </div>
      </div>
    </Link>
  );
}
