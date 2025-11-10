import React, { useState, useEffect } from 'react';
import './Story.css';

const Story = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/images/vogue1.jpg', alt: 'Arabic Roots, Kenyan Soul' },
    { src: '/images/vogue2.jpg', alt: 'Behind the Scenes: Juice Making' },
    { src: '/images/vogue3.jpg', alt: 'Flavor That Hits Hard' },
    { src: '/images/vogue4.avif', alt: 'Community Stories' },
    { src: '/images/vogue5.jpg', alt: 'Handcrafted with Love' },
    { src: '/images/waa.jpg', alt: 'Building Connections' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      const newSlide = prev + direction;
      if (newSlide < 0) return slides.length - 1;
      if (newSlide >= slides.length) return 0;
      return newSlide;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="story" id="story">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
        <button className="nav-arrow left" onClick={() => changeSlide(-1)}>&#10094;</button>
        <button className="nav-arrow right" onClick={() => changeSlide(1)}>&#10095;</button>
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
