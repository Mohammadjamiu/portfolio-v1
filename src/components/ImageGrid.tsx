"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="relative w-72 h-72 md:w-96 md:h-96 mx-auto flex justify-center items-center" // Center the image container
      >
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-[2px] bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl" />

          {/* Glow Effect */}
          <div className="absolute inset-[2px] rounded-3xl animate-glow" />

          {/* Image */}
          <div className="relative h-full w-full rounded-3xl overflow-hidden">
            <Image
              src={images[0].src || "/placeholder.svg"}
              alt={images[0].alt}
              fill
              className="object-left-top object-cover p-2 rounded-3xl transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 288px, 384px"
              priority
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
