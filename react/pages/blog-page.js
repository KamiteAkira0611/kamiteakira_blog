import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();

  return { props: { posts } };
}
