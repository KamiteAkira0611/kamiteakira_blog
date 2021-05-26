import Link from "next/link";
import PostDetailsView from "components/posts/PostDetailsView";
import Layout from "layouts";
import { getAllPostsIds, getPostData } from "lib/posts";

export default function Post({ post = {} }) {
  return (
    <Layout title={post.title}>
      <PostDetailsView post={post} />

      {/* <h1>{post.title}</h1>
      <p>{post.body}</p> */}

      <Link href="/posts">
        <p>back</p>
      </Link>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const paths = await getAllPostsIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const post = await getPostData(params.id);
//   return {
//     props: {
//       post,
//     },
//   };
// }
