import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';

interface Car {
  id: string;
  name: string;
  releaseDate: string;
  imageUrl: string;
  mainImage: {
    alt: string;
  };
  description: string;
}

export default async function Home() {
  const query = `*[_type == "car"] {
    id,
    name,
    releaseDate,
    "imageUrl": mainImage.asset->url,
    mainImage { alt },
    "description": description[].children[].text
  }`;

  const carData: Car[] = await client.fetch(query);
  console.log(carData);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Cars Collection</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {carData.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.imageUrl}
              alt={item.mainImage?.alt || item.name}
              width={400}
              height={200}
              objectFit="cover"
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-sm text-gray-500 mb-4">
              Released on {new Date(item.releaseDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="card-actions justify-center mt-4">
              <Link href={`/detail/${item.id}`}>
                <button className="btn bg-gradient-to-r from-teal-900 to-blue-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-white px-4 py-2 rounded-sm shadow-sm">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
