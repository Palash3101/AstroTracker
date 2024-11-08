import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageComponent from "./ImageComponent";
import SelectedCard from "./SelectedCard";
import "../stylesheets/NewGallery.css";

const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (card) => {
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  return (
    <div className="gallery-container relative">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="gallery-item"
          onClick={() => handleClick(card)}
          layoutId={`card-${card.id}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: card.id * 0.1 }}
          whileHover={{ scale: 1 }}
        >
          <ImageComponent card={card} />
        </motion.div>
      ))}
      
      {/* Overlay and centered card */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="overlay absolute inset-0 bg-black opacity-50 z-10"
              onClick={handleOutsideClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />
            <SelectedCard selected={selected} onClose={handleOutsideClick} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LayoutGrid;
