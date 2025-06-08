import React from 'react';
import '../Pages/CSS/About.css';
import Aesop from '../Components/Assets/Frontend_Assets/ceo.png';
import AesopHistory from '../Components/Assets/Frontend_Assets/history.png';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Aesop Cosmetics</h1>
      <div className="about-content">
        <div className="about-image-large">
          <img src={Aesop} alt="CEO of Aesop" className="about-image-large-content" />
        </div>
        <div className="about-text">
          <p className="about-description">
            Aesop Cosmetics is a luxury skincare and beauty brand known for its high-quality products made from the finest ingredients. 
            Founded with a passion for combining nature and science, Aesop offers a range of skincare, haircare, and body care products that 
            prioritize both effectiveness and sustainability. With a minimalist aesthetic and a commitment to ethical sourcing, 
            Aesop has become a trusted name in the beauty industry worldwide. Our products are crafted to deliver results while ensuring 
            a seamless experience for your skin and senses.
          </p>
          <div className="about-history">
            <img src={AesopHistory} alt="Aesop History" className="about-history-image" />
            <p className="history-description">Aesop's journey through history, embracing innovation and tradition.</p>
          </div>
        </div>
      </div>
      <div className="about-map">
        <h2 className="map-title">Aesop Locations Around the World</h2>
        <iframe
          title="Aesop Store Locations"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509444!2d144.96305781550495!3d-37.81362774202161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sAesop!5e0!3m2!1sen!2sus!4v1633097560914!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
