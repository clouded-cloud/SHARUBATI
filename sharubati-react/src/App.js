import React, { useState } from 'react';
import Header from './components/Header';
import Story from './components/Story';
import Menu from './components/Menu';
import Merchandise from './components/Merchandise';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

c

  return (
    <div className="App">
      <Header cartCount={cartCount} onPlaceOrder={handlePlaceOrder} />
      <Story />
      <Menu onAddToCart={handleAddToCart} />
      <Merchandise onAddToCart={handleAddToCart} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
