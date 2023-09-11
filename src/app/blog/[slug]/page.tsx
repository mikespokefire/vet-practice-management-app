// export function generateStaticParams() {
//   // const posts = await fetch('https://.../posts').then((res) => res.json())

import { getPost } from "../postsData";

//   // return posts.map((post) => ({
//   //   slug: post.slug,
//   // }))
//   return [
//     {slug: "3-third-post"},
//     {slug: "2-second-post"},
//     {slug: "1-first-post"},
//   ];
// }

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>
        This is a blog post page about {params.slug}. The following is all body content
      </p>
      <div dangerouslySetInnerHTML={{__html: post.body}}></div>
    </main>
  )
}
