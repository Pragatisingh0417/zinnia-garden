"use client";

import Link from "next/link";
import Image from "next/image";

const galleryCategories = [
  {
    title: "Surrey Wedding",
    slug: "surrey-wedding",
    cover: "/gallery/Surrey-wedding-photographer_0114.jpg",
  },
  {
    title: "Asian Weddings",
    slug: "asian-weddings",
    cover: "/gallery/asian-wedding-1.jpeg",
  },
  {
    title: "Parties and Other",
    slug: "partiesandothers",
    cover: "/gallery/RAFYL_0107.jpg",
  },
  {
    title: "Weddings",
    slug: "Weddings",
    cover: "/gallery/WED1.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Banner */}
      <section className="relative w-full h-[350px] md:h-[600px]">
        <Image
          src="/gallery/wedding-image.jpg"
          alt="Zinnia Gardens Gallery"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Wedding Galleries
          </h1>
          <p className="text-lg mt-3 max-w-2xl">
            Explore our most memorable weddings and events held at Zinnia Gardens.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-[1400px] mx-auto py-16 px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {galleryCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/gallery/${category.slug}`}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <Image
              src={category.cover}
              alt={category.title}
              width={500}
              height={300}
              className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
            <h2 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
              {category.title}
            </h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
