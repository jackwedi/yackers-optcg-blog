import Link from "next/link";
import { IPost } from "../utils/getPostMetadatas";
import { formatDate } from "../utils/formatDate";

export default function PostCard(props: { post: IPost }) {
  const { post } = props;

  const [wins, loss] = props.post.score.split("-");
  return (
    <Link
      className="flex flex-col space-y-1 mb-4 "
      href={`/tournament/${post.slug}`}
    >
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
          {formatDate(post.date)}
        </p>
        <p className="text-neutral-900 flex dark:text-neutral-100 tracking-tight">
          [{post.leader}]{" "}
        </p>
        <p className="text-green-700">{wins} WIN </p>
        <p className="text-red-700"> {loss} LOSS</p>
      </div>
    </Link>
  );
}
