import type { Post } from "@/utils/Interface";
import { client } from "@/sanity/lib/client";

export async function getPosts() {
    const query = `*[_type=="post"]{
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "tags": tags[]-> {
    name,
    "slug": slug.current
    }
  }`;
    const posts: Post[] = await client.fetch(query);
    return posts;
  }