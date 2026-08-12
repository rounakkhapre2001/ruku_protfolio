import React from "react";
import { motion } from "framer-motion";

export default function MotionImage({ src, alt, className = "", delay = 0 }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`block object-cover ${className}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    />
  );
}
