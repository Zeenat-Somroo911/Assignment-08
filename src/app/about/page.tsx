import Image from 'next/image';
import carsImage from "@/public/luxurious-car-collection-stockcake.jpg";

export default function CarsCollectionPage() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold mb-8">About Our Cars Collection</h1>
      <div className="mb-8">
        <Image
          src={carsImage}
          alt="Cars Collection"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      <div className="prose max-w-none mx-auto text-center">
        <p>
          Welcome to our Cars Collection hub, a dedicated space for car enthusiasts and collectors. Our mission is to showcase stunning vehicles, share insights, and celebrate the art of automobile design and engineering.
        </p>
        <h2 className="text-black font-bold text-2xl mt-6">Our Purpose</h2>
        <p>
          This page is dedicated to celebrating the beauty and innovation of cars. Whether you are drawn to classic vintage models, high-performance supercars, or innovative electric vehicles, we aim to connect you with cars that fuel your passion.
        </p>
        <h2 className="text-black font-bold text-2xl mt-6">What We Offer</h2>
        <ul className="list-disc list-inside text-left mx-auto inline-block">
          <li>Showcase of iconic classic and modern cars</li>
          <li>Reviews of high-performance and luxury vehicles</li>
          <li>Insights into automotive history and trends</li>
          <li>Interviews with car collectors and industry experts</li>
          <li>Car lists curated for enthusiasts, based on categories like speed, design, and innovation</li>
        </ul>
        <h2 className="text-black font-bold text-2xl mt-6">Our Commitment</h2>
        <p>
          Our collection is committed to being a trusted resource for car lovers seeking to explore the world of automobiles. We believe in the power of design and engineering to inspire and connect people. Whether you are a casual fan or a dedicated collector, this hub is your guide to the fascinating world of cars.
        </p>
        <p>
          Join us on this journey as we explore vehicles that excite, innovate, and remind us of the artistry of automotive design.
        </p>
      </div>
    </div>
  );
}
