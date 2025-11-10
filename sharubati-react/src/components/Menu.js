import React from 'react';
import './Menu.css';

const Menu = ({ onAddToCart }) => {
  const juices = [
    { img: '/images/diff colors.jpg', category: 'Fruit Blend', name: 'Orchard Essence', price: '300 KSH' },
    { img: '/images/red.jpg', category: 'Berry Blend', name: 'Wild Berries', price: '280 KSH' },
    { img: '/images/coke.jpg', category: 'Citrus Blend', name: 'Citrus Grove', price: '290 KSH' },
    { img: '/images/green.jpg', category: 'Green Blend', name: 'Green Detox', price: '320 KSH' },
    { img: '/images/strong tea.jpg', category: 'Tropical Blend', name: 'Pineapple Juice', price: '280 KSH' },
    { img: '/images/diff colors.jpg', category: 'Tropical Blend', name: 'Tropical Juice', price: '290 KSH' },
    { img: '/images/mango.jpg', category: 'Tropical Blend', name: 'Mango Juice', price: '300 KSH' },
    { img: '/images/orange.jpg', category: 'Tropical Blend', name: 'Passion Juice', price: '320 KSH' },
    { img: '/images/red.jpg', category: 'Fruit Blend', name: 'Watermelon Juice', price: '270 KSH' },
    { img: '/images/tropical.jpg', category: 'Vegetable Blend', name: 'Beetroot Juice', price: '300 KSH' },
    { img: '/images/green.jpg', category: 'Herbal Blend', name: 'Pinemint Juice', price: '330 KSH' }
  ];

  const cocktails = [
    { img: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Spirited Mix', name: 'Spicy Ginger Mule', price: '350 KSH' },
    { img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Signature Cocktail', name: 'Tropical Paradise', price: '340 KSH' },
    { img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Mocktail', name: 'Berry Bliss Mocktail', price: '330 KSH' },
    { img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Classic Cocktail', name: 'Midnight Martini', price: '350 KSH' }
  ];

  const pastries = [
    { img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Classic Cookies', name: 'Chocolate Chip Delight', price: '250 KSH' },
    { img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Healthy Cookies', name: 'Oatmeal Raisin Bliss', price: '260 KSH' },
    { img: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Premium Cookies', name: 'Macadamia Crunch', price: '280 KSH' },
    { img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Chocolate Cookies', name: 'Double Chocolate Heaven', price: '270 KSH' }
  ];

  return (
    <section className="products" id="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <div className="menu-nav">
          <ul>
            <li><a href="#juices">Fresh Juices</a></li>
            <li><a href="#cocktails">Signature Cocktails</a></li>
            <li><a href="#pastries">Artisan Pastries</a></li>
          </ul>
        </div>

        <div className="menu-subsection" id="juices">
          <h3 className="subsection-title">Fresh Juices</h3>
          <div className="product-grid">
            {juices.map((juice, index) => (
              <div key={index} className="product-card sketch-border">
                <div className="product-image">
                  <img src={juice.img} alt={juice.name} />
                </div>
                <div className="product-info">
                  <div className="product-category">{juice.category}</div>
                  <h3 className="product-name">{juice.name}</h3>
                  <div className="product-price">{juice.price}</div>
                  <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-subsection" id="cocktails">
          <h3 className="subsection-title">Signature Cocktails</h3>
          <div className="product-grid">
            {cocktails.map((cocktail, index) => (
              <div key={index} className="product-card sketch-border">
                <div className="product-image">
                  <img src={cocktail.img} alt={cocktail.name} />
                </div>
                <div className="product-info">
                  <div className="product-category">{cocktail.category}</div>
                  <h3 className="product-name">{cocktail.name}</h3>
                  <div className="product-price">{cocktail.price}</div>
                  <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-subsection" id="pastries">
          <h3 className="subsection-title">Artisan Pastries</h3>
          <div className="product-grid">
            {pastries.map((pastry, index) => (
              <div key={index} className="product-card sketch-border">
                <div className="product-image">
                  <img src={pastry.img} alt={pastry.name} />
                </div>
                <div className="product-info">
                  <div className="product-category">{pastry.category}</div>
                  <h3 className="product-name">{pastry.name}</h3>
                  <div className="product-price">{pastry.price}</div>
                  <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
