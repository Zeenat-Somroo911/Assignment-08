import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  publishedAt: string;
  imageUrl: string;
  mainImage: {
    alt: string;
  };
  bodyText: string;
}

export default async function Home() {
  const query = `*[_type == "post"] {
    id,
    title,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    mainImage { alt },
    "bodyText": body[].children[].text
  }`;

  const blogData: Post[] = await client.fetch(query);
  console.log(blogData);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Novels Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((item) => (
          <div
            key={item.id}  // Add the key prop here
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.imageUrl}
              alt={item.mainImage?.alt || item.title}
              width={400}
              height={200}
              objectFit="cover"
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(item.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            {/* <p className="text-gray-700 text-sm">{item.bodyText}</p> */}
            <div className="card-actions justify-center mt-4">
              <Link href={`/detail/${item.id}`}>
                <button className="btn bg-gradient-to-r from-teal-900 to-blue-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-white px-4 py-2 rounded-sm shadow-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}