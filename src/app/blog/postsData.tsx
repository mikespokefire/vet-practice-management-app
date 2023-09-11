type Post = {
  id: number;
  slug: string;
  title: string;
  body: string;
}

const postData: Post[] = [
  {
    id: 3,
    slug: "3-third-post",
    title: "Third blog post",
    body: `
      <p>First paragraph of third blog post</p>
      <p>Second paragraph of third blog post</p>
      <p>Third paragraph of third blog post</p>
    `,
  },
  {
    id: 2,
    slug: "2-second-post",
    title: "Second blog post",
    body: `
      <p>First paragraph of second blog post</p>
      <p>Second paragraph of second blog post</p>
      <p>Third paragraph of second blog post</p>
    `,
  },
  {
    id: 1,
    slug: "1-first-post",
    title: "First blog post",
    body: `
      <p>First paragraph of first blog post</p>
      <p>Second paragraph of first blog post</p>
      <p>Third paragraph of first blog post</p>
    `,
  },
];

export async function getPosts(): Promise<Post[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(postData);
    }, 3000);
  });
}

export async function getPost(slug: string): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundPost = postData.find((post) => {
        return post.slug === slug;
      });

      if (foundPost) {
        resolve(foundPost);
      } else {
        reject("Custom reject message");
      }
    }, 1000);
  });
}
