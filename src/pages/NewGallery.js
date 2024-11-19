import React, { useEffect } from "react";
import Header from "../components/Header";
//import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../stylesheets/NewGallery.css"; // Ensure the styles are applied

// Importing images from local images folder
import house1 from "../images/download.jpeg";
import house2 from "../images/download(1).jpeg";
import house3 from "../images/image3.jpg";
import house4 from "../images/BlackHole.jpeg";
import house5 from "../images/IMG20221203210931_BURST001_COVER.jpg";
import house6 from "../images/images.jpeg";
import house7 from "../images/background.jpg";
import house8 from "../images/360_F_954581369_grjsknPFKcwHhkzeSDnwdAqc9OYITZMJ.jpg";

// Cards array with only images (no text content)
const cards = [
  { id: 1, thumbnail: house1 },
  { id: 2, thumbnail: house2 },
  { id: 3, thumbnail: house3 },
  { id: 4, thumbnail: house4 },
  { id: 5, thumbnail: house5 },
  { id: 6, thumbnail: house6 },
  { id: 7, thumbnail: house7 },
  { id: 8, thumbnail: house8 },
];

const NewGallery = () => {
  // UseEffect to adjust grid-row-end based on image height for masonry effect
  useEffect(() => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      const img = item.querySelector('img');
      img.onload = () => {
        const rowSpan = Math.ceil(img.height / 10); // Adjust row span dynamically based on image height
        item.style.gridRowEnd = `span ${rowSpan}`;
      };
    });
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <div className="h-screen py-20 w-full">
        <header className="gallery-header">
          <h1>Gallery</h1>
        </header>
        <div className="gallery-container">
          {cards.map(card => (
            <div key={card.id} className="gallery-item">
              <img src={card.thumbnail} alt={`Thumbnail ${card.id}`} />
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default NewGallery;
