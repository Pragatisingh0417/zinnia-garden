"use client";

import Image from "next/image";

export default function FixedFlowers() {
  return (
    <>
      {/* Left Flower */}
      <div className="absolute left-0 top-0 h-full w-[200px] pointer-events-none">
        <Image
          src="/images/img-left.png"
          alt="Decorative Flower Left"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Right Flower */}
      <div className="absolute right-0 top-0 h-full w-[200px] pointer-events-none">
        <Image
          src="/images/img-right.png"
          alt="Decorative Flower Right"
          fill
          className="object-contain object-right"
        />
      </div>
    </>
  );
}
