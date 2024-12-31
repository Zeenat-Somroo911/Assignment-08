import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types'; // Import the PortableTextBlock type
import Image from 'next/image';
import React from 'react';

type BlogPost = {
  id: string;
  title: string;
  publishedAt: string;
  authorName: string;
  imageUrl: string;
  authorImage: string;
  mainImage: { alt: string };
  body: PortableTextBlock[]; // Change `any` to `PortableTextBlock[]`
};

const fetchBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const query = `*[_type == "post" && id == $id] {
      id,
      title,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      mainImage { alt },
      body,
      "authorName": author->name,
      "authorImage": author->image.asset->url
    }`;
    const result = await client.fetch(query, { id: parseInt(id) });
    return result?.[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export default async function BlogPostPage({
  params: rawParams,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = await rawParams;
  const { id } = params;

  if (!id) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  const blogPost = await fetchBlogPostById(id);

  if (!blogPost) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{blogPost.title}</h1>
      <p className="text-sm text-gray-500">
        Published on {new Date(blogPost.publishedAt).toDateString()}
      </p>
      <div className="flex items-center mt-4">
        {blogPost.authorImage && (
          <Image
            src={blogPost.authorImage}
            alt={`${blogPost.authorName}'s photo`}
            className="rounded-full"
            width={50}
            height={50}
          />
        )}
        <p className="ml-4 text-lg font-medium">{blogPost.authorName}</p>
      </div>

      {blogPost.imageUrl && (
        <div className="mt-6">
          <Image
            src={blogPost.imageUrl}
            alt={blogPost.mainImage?.alt || 'Blog image'}
            className="rounded-lg"
            width={200}
            height={200}
          />
        </div>
      )}

      <div className="prose prose-lg mt-8">
        <PortableText value={blogPost.body} />
      </div>
    </div>
  );
}