// src/pages/Blog.js

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import "../stylesheets/Blog.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// Import images
import innovationImg from "../images/BlackHole.jpeg";
import digitalRevolutionImg from "../images/BlackHole.jpeg";
import designImg from "../images/BlackHole.jpeg";
import communicationImg from "../images/BlackHole.jpeg";
import knowledgeImg from "../images/BlackHole.jpeg";
import creationImg from "../images/BlackHole.jpeg";
import adventureImg from "../images/BlackHole.jpeg";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("gallery-grid", className)}>
      {children}
    </div>
  );
};

const BentoGridItem = ({ className, title, description, icon, author, avatar, readTime, image }) => {
  return (
    <div className={cn("gallery-item", className)}>
      <div className="gallery-item-header">
        <img src={avatar} alt={author} className="avatar" />
        <div className="author-info">
          <span className="author-name">{author}</span>
          <span className="read-time">{readTime}</span>
        </div>
      </div>
      <img src={image} alt={title} className="gallery-item-image" />
      <div className="gallery-item-content">
        {icon}
        <div className="gallery-item-title">{title}</div>
        <div className="gallery-item-description">{description}</div>
      </div>
    </div>
  );
};

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    icon: <IconClipboardCopy className="icon-style" />,
    author: "John Doe",
    avatar: "https://via.placeholder.com/30",
    readTime: "5 min read",
    image: innovationImg,
    size: "large"
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    icon: <IconFileBroken className="icon-style" />,
    author: "Jane Smith",
    avatar: "https://via.placeholder.com/30",
    readTime: "7 min read",
    image: digitalRevolutionImg,
    size: "medium"
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    icon: <IconSignature className="icon-style" />,
    author: "Alex Johnson",
    avatar: "https://via.placeholder.com/30",
    readTime: "4 min read",
    image: designImg,
    size: "small"
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    icon: <IconTableColumn className="icon-style" />,
    author: "Chris Lee",
    avatar: "https://via.placeholder.com/30",
    readTime: "6 min read",
    image: communicationImg,
    size: "medium"
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    icon: <IconArrowWaveRightUp className="icon-style" />,
    author: "Patricia Green",
    avatar: "https://via.placeholder.com/30",
    readTime: "8 min read",
    image: knowledgeImg,
    size: "large"
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    icon: <IconBoxAlignTopLeft className="icon-style" />,
    author: "Michael Brown",
    avatar: "https://via.placeholder.com/30",
    readTime: "3 min read",
    image: creationImg,
    size: "small"
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    icon: <IconBoxAlignRightFilled className="icon-style" />,
    author: "Emily White",
    avatar: "https://via.placeholder.com/30",
    readTime: "9 min read",
    image: adventureImg,
    size: "medium"
  },
];

export function Blog() {
  return (
    <div>
      <Header />
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            author={item.author}
            avatar={item.avatar}
            readTime={item.readTime}
            image={item.image}
            className={item.size}
          />
        ))}
      </BentoGrid>
      <Footer />
    </div>
  );
}

export default Blog;
