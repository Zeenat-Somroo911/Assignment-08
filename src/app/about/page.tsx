import Image from 'next/image'
import libraryimage from '@/public/library.jpeg'
// import { Library } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold mb-8">About Our Novels Blog</h1>
      <div className="mb-8">
        <Image
          src={libraryimage}
          alt="Novels Blog"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      <div className="prose max-w-none mx-auto text-center">
        <p>
          Welcome to our Novels Blog, a hub for book lovers and literary enthusiasts. Our mission is to explore the world of storytelling by sharing reviews, recommendations, and insights into novels that span across genres, cultures, and eras.
        </p>
        <h2 className="text-black font-bold text-2xl mt-6">Our Purpose</h2>
        <p>
          This blog is dedicated to celebrating the art of storytelling. Whether you enjoy gripping mysteries, heartwarming romances, thrilling adventures, or thought-provoking literary fiction, we aim to connect you with novels that captivate your imagination.
        </p>
        <h2 className="text-black font-bold text-2xl mt-6">What We Offer</h2>
        <ul className="list-disc list-inside text-left mx-auto inline-block">
          <li>Reviews of contemporary and classic novels</li>
          <li>Recommendations based on genres, themes, and reader preferences</li>
          <li>Interviews with authors from diverse literary backgrounds</li>
          <li>Deep dives into the themes and characters of popular novels</li>
          <li>Book lists tailored to specific moods, seasons, or occasions</li>
        </ul>
        <h2 className="text-black font-bold text-2xl mt-6">Our Commitment</h2>
        <p>
          Our blog is committed to being a trusted resource for anyone seeking their next great read. We believe in the power of stories to inspire, entertain, and connect people across boundaries. Whether you are a casual reader or a devoted bibliophile, this blog is your guide to the ever-expanding universe of novels.
        </p>
        <p>
          Join us on this literary journey as we discover stories that move us, challenge us, and remind us of the beauty of the written word.
        </p>
      </div>
    </div>
  );
}