import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>Welcome to Sharubati, where every sip tells a story. Our name is our heritage, inspired by the Arabic word for a delicious, fruity beverage. But our soul is pure Kenyan energy.</p>
            <p>We took that foundation and gave it a local twist, transforming the last syllable into "bare" – the Swahili slang for "slap." And that's exactly what our flavors do. They hit you with a wave of taste so intense, so unexpectedly delicious, it's a bare of pure goodness.</p>
            <p>From our fresh, nutrient-packed juices to the crafted cocktails and mocktails at the sharuBARti section, we're here to revolutionize your drink experience. So come on in, and let your taste buds get slapped by flavor.</p>
            <a href="#" className="btn">Our Process</a>
          </div>
          <div className="about-image sketch-border">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="About Ink & Press" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
