import React, { useState } from 'react';
import './NewsLetter.css';
import photo1 from '../Assets/Frontend_Assets/Clear1.png';
import photo2 from '../Assets/Frontend_Assets/Clear2.png';
import photo3 from '../Assets/Frontend_Assets/Clear3.png';
import photo4 from '../Assets/Frontend_Assets/Clear4.png';

const images = [
  {
    src: photo1,
    title: "Rōzu Eau de Parfum",
    description: "Rōzu Eau de Parfum is a luxurious fragrance that combines the essence of rose with hints of shiso and guaiacwood. Perfect for those who appreciate a floral yet woody scent.",
    price: "$200.00",
    additionalInfo: "This fragrance is perfect for evening wear and special occasions."
  },
  {
    src: photo2,
    title: "Product 2 Title",
    description: "This product offers a unique blend of ingredients that provide a refreshing experience, ideal for daily use.",
    price: "$150.00",
    additionalInfo: "Use it every morning for a refreshing start to your day."
  },
  {
    src: photo3,
    title: "Product 3 Title",
    description: "Experience the rich aroma of this product, designed to invigorate your senses and enhance your mood.",
    price: "$180.00",
    additionalInfo: "Perfect for a relaxing evening or a spa day at home."
  },
  {
    src: photo4,
    title: "Product 4 Title",
    description: "A premium selection that combines quality and elegance, perfect for special occasions.",
    price: "$220.00",
    additionalInfo: "Ideal for gifting or celebrating milestones."
  }
];

const NewsLetter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='newsletter'>
      <div className='slider'>
        <div className='prev' onClick={prevSlide}></div>
        <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
        <div className='next' onClick={nextSlide}></div>
      </div>
      <div className='product-info'>
        <h2>{images[currentIndex].title}</h2>
        <p>{images[currentIndex].description}</p>
        <p className='price'>{images[currentIndex].price}</p>
      </div>
      <div className='additional-info'>
        <div className='text-container'>
          <p>{images[currentIndex].additionalInfo}</p> {/* Përdorim përshkrimin e veçantë për secilin produkt */}
        </div>
        <img src={images[currentIndex].src} alt="Additional visual" className='additional-image' />
      </div>
    </div>
  );
};

export default NewsLetter;