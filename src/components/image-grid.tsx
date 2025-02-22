"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="relative max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-square md:translate-y-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl" />
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(59,130,246,0.2)] rounded-3xl" />
          <div className="absolute inset-0 animate-glow" />
          <Image
            src={images[0].src || "/placeholder.svg"}
            alt={images[0].alt}
            fill
            className="object-cover rounded-3xl p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>

        {/* Center Image (Larger) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-square md:scale-125 md:z-10 origin-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl" />
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(59,130,246,0.2)] rounded-3xl" />
          <div className="absolute inset-0 animate-glow" />
          <Image
            src={images[1].src || "/placeholder.svg"}
            alt={images[1].alt}
            fill
            className="object-cover rounded-3xl p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative aspect-square md:translate-y-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl" />
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(59,130,246,0.2)] rounded-3xl" />
          <div className="absolute inset-0 animate-glow" />
          <Image
            src={images[2].src || "/placeholder.svg"}
            alt={images[2].alt}
            fill
            className="object-cover rounded-3xl p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
}
