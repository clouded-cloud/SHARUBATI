import React from 'react';
import './Merchandise.css';

const Merchandise = ({ onAddToCart }) => {
  const merchandise = [
    { img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Apparel', name: 'Artisan Tee', price: '350 KSH' },
    { img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Accessories', name: 'Glass Bottle', price: '340 KSH' },
    { img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Gift Set', name: 'Collector\'s Set', price: '350 KSH' },
    { img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Apparel', name: 'Canvas Cap', price: '330 KSH' }
  ];

  return (
    <section className="products" id="merchandise">
      <div className="container">
        <h2 className="section-title">Goods & Merchandise</h2>
        <div className="product-grid">
          {merchandise.map((item, index) => (
            <div key={index} className="product-card sketch-border">
              <div className="product-image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="product-info">
                <div className="product-category">{item.category}</div>
                <h3 className="product-name">{item.name}</h3>
                <div className="product-price">{item.price}</div>
                <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
