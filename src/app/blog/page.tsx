import Link from "next/link";
import { getPosts } from "./postsData";

export default function Blog() {
  const allPosts = getPosts();

  return (
    <main>
      <p>
        This is the blog page.
      </p>
      <h2>Latest posts</h2>
      <ul>
        {allPosts.map((post) => {
          return <li key={post.slug}><Link href={`/blog/${post.slug}`}>{post.title}</Link></li>
        })}
      </ul>
    </main>
  )
}
