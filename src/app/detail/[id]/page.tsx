import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types'; // Import the PortableTextBlock type
import Image from 'next/image';
import React from 'react';

type CarDetails = {
  id: string;
  name: string;
  releaseDate: string;
  manufacturer: string;
  imageUrl: string;
  manufacturerLogo: string;
  mainImage: { alt: string };
  description: PortableTextBlock[]; // Change `any` to `PortableTextBlock[]`
};

const fetchCarDetailsById = async (id: string): Promise<CarDetails | null> => {
  try {
    const query = `*[_type == "car" && id == $id] {
      id,
      name,
      releaseDate,
      "imageUrl": mainImage.asset->url,
      mainImage { alt },
      description,
      "manufacturer": manufacturer->name,
      "manufacturerLogo": manufacturer->logo.asset->url
    }`;
    const result = await client.fetch(query, { id: parseInt(id) });
    return result?.[0] || null;
  } catch (error) {
    console.error('Error fetching car details:', error);
    return null;
  }
};

export default async function CarDetailsPage({
  params: rawParams,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = await rawParams;
  const { id } = params;

  if (!id) {
    return <div className="text-center text-red-500">Car details not found</div>;
  }

  const carDetails = await fetchCarDetailsById(id);

  if (!carDetails) {
    return <div className="text-center text-red-500">Car details not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{carDetails.name}</h1>
      <p className="text-sm text-gray-500">
        Released on {new Date(carDetails.releaseDate).toDateString()}
      </p>
      <div className="flex items-center mt-4">
        {carDetails.manufacturerLogo && (
          <Image
            src={carDetails.manufacturerLogo}
            alt={`${carDetails.manufacturer}'s logo`}
            className="rounded-full"
            width={50}
            height={50}
          />
        )}
        <p className="ml-4 text-lg font-medium">{carDetails.manufacturer}</p>
      </div>

      {carDetails.imageUrl && (
        <div className="mt-6">
          <Image
            src={carDetails.imageUrl}
            alt={carDetails.mainImage?.alt || 'Car image'}
            className="rounded-lg"
            width={200}
            height={200}
          />
        </div>
      )}

      <div className="prose prose-lg mt-8">
        <PortableText value={carDetails.description} />
      </div>
    </div>
  );
}
