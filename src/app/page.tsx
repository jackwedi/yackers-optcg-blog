import PostCard from "../../components/PostCard";
import getPostMetadata from "../../utils/getPostMetadatas";

export default function Home() {
  const postMetadatas = getPostMetadata("tournaments");

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Journey of an average OPTCG player
      </h1>
      <p className="mb-4">{`I'm Jack and I started playing OPTCG during the launch of OP06 and since then I still can't understand why I can't be consistent with my local tournament results. This blog will detail every tournament I will attend and hopefully I can get some kind of improvment by taking notes of every matchups.`}</p>
      <div className="my-8">
        {postMetadatas
          .sort(
            (postA, postB) =>
              new Date(postB.date) - new Date(postA.date)
          )
          .map((post, postIndex) => {
            return <PostCard key={postIndex} post={post}></PostCard>;
          })}
      </div>
    </section>
  );
}
