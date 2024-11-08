import React from "react";
import { motion } from "framer-motion";

const SelectedCard = ({ selected, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-20"
      onClick={onClose}
      layoutId={`card-${selected.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Dimmed background */}
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
      />

      {/* Centered selected card */}
      <motion.div
        className="relative bg-white rounded-lg p-4 shadow-lg"
        layoutId={`card-content-${selected.id}`}
        onClick={(e) => e.stopPropagation()} // Prevents click from closing when clicking inside the card
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-1"
        >
          ✕
        </button>
        <img
          src={selected.thumbnail}
          alt="thumbnail"
          className="object-cover rounded-lg w-full"
        />
        <div className="mt-4 text-center">{selected.content}</div>
      </motion.div>
    </motion.div>
  );
};

export default SelectedCard;
