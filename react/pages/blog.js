import Post from "../components/Post";
import Layout from "../layouts";
import { getAllPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();

  return { props: { posts } };
}
