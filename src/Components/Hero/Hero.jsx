import React, { useState, useEffect } from 'react';
import './Hero.css';
import aesopImage from '../Assets/Frontend_Assets/aesop.png';
import aesop1Image from '../Assets/Frontend_Assets/aesop1.png';
import aesop2Image from '../Assets/Frontend_Assets/aesop2.png';

const images = [aesopImage, aesop1Image, aesop2Image];




const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className='hero' style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      {/* Add your content here */}
    </div>
  );
}

export default Hero;
