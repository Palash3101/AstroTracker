import React from "react";
import { motion } from "framer-motion";

const ImageComponent = ({ card }) => {
  return (
    <motion.img
      src={card.thumbnail}
      alt="thumbnail"
      className="object-cover w-full h-full rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ImageComponent;
