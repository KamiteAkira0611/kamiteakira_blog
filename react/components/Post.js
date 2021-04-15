import Link from "next/link";

export default function Post({ post }) {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <span>
          {post.id} : {post.title}
        </span>
      </Link>
    </div>
  );
}
