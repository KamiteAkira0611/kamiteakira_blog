import Layout from "../../components/Layout";
import Link from "next/link";
import { getAllPostsIds, getPostData } from "../../lib/posts";

export default function Post({ post }) {
  return (
    <Layout title={post.title}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <Link href="/blog-page">
        <p>back</p>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
