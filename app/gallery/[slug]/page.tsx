"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

const galleryImages: Record<string, string[]> = {
  "surrey-wedding": [
        "/gallery/Surrey-wedding-photographer_0160.jpg",
    "/gallery/Surrey-wedding-photographer_0114.jpg",
    "/gallery/Surrey-wedding-photographer_0118.jpg",
    "/gallery/Surrey-wedding-photographer_0146.jpg",
        "/gallery/Surrey-wedding-photographer_0149.jpg",

            "/gallery/Surrey-wedding-photographer_0148.jpg",


                "/gallery/Surrey-wedding-photographer_0170.jpg",

                    "/gallery/Surrey-wedding-photographer_0172.jpg",

  ],
  "asian-weddings": [
    "/gallery/asian-wedding-1.jpeg",
    "/gallery/asian-wedding-2.jpeg",
    "/gallery/asian-wedding-3.jpeg",
        "/gallery/asian-wedding-4.jpeg",

            "/gallery/asian-wedding-5.jpeg",

                "/gallery/asian-wedding-9.jpeg",


                        "/gallery/asian-wedding-8.jpeg",

  ],
  "partiesandothers": [
    "/gallery/RAFYL_0107.jpg",
    "/gallery/RAFYL_0145.jpg",
    "/gallery/RAFYL_0161.jpg",
        "/gallery/parties-1.jpg",

            "/gallery/parties-2.jpg",

                "/gallery/parties-3.jpg",

                    "/gallery/parties-4.jpg",

  ],

  "Weddings": [
    "/gallery/WED1.jpg",
    "/gallery/WED2.jpg",
    "/gallery/WED3.jpg",

        "/gallery/WED4.jpg",

            "/gallery/WED5.jpg",
                "/gallery/WED6.jpg",
    "/gallery/WED111.jpg",


  ],
};

export default function GalleryDetail() {
  const { slug } = useParams();
  const images = galleryImages[slug as string] || [];

  return (
    <main className="bg-white min-h-screen text-gray-800">
      <section className="relative w-full h-[300px] md:h-[400px] mb-10">
        <Image
          src={images[0] || "/gallery/default-cover.jpg"}
          alt={`${slug} Cover`}
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold capitalize">
            {slug?.toString().replace("-", " & ")}’s Gallery
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow hover:shadow-lg">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
