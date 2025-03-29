import Link from "next/link";
import getPostMetadata from "../../../utils/getPostMetadatas";
import Image from "next/image";

export default async function DecklistPage() {
  const postMetadatas = getPostMetadata("decklists");

  return (
    <main>
      <div className="flex space-x-0 md:space-x-2">
        {postMetadatas.map((post, postIndex) => {
          const leaderImgKey = post.leader.split(" ")[0];

          return (
            <div
              key={postIndex}
              className="bg-black transition-all duration-5 ease-in before"
            >
              <Link className=" space-y-1 mb-4" href={`/decklist/${post.slug}`}>
                <Image
                  width={"300"}
                  height={"300"}
                  alt={post.leader}
                  src={`https://pweuoelwazf73v8n.public.blob.vercel-storage.com/leaders/${leaderImgKey}_p1.png`}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
