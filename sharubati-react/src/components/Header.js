import React, { useState } from 'react';
import './Header.css';

const Header = ({ cartCount, onPlaceOrder }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const toggleOpen = () => setOpen(prev => !prev);

  const submitOrder = () => {
    if (!name.trim() || !phone.trim()) {
      alert('Please enter name and phone number before placing the order.');
      return;
    }

    const order = {
      customerName: name.trim(),
      customerPhone: phone.trim(),
      itemsCount: cartCount,
      orderType: 'Takeaway'
    };

    if (onPlaceOrder) onPlaceOrder(order);
    setOpen(false);
    setName('');
    setPhone('');
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">SHARUBATI</a>
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#merchandise">Goods</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="cart-icon" onClick={toggleOpen} style={{cursor: 'pointer'}}>
            <i className="fas fa-shopping-bag"></i>
            <div className="cart-count">{cartCount}</div>
          </div>
        </div>
      </div>

      {open && (
        <div className="checkout-modal" style={modalStyles.backdrop} onClick={toggleOpen}>
          <div style={modalStyles.modal} onClick={e => e.stopPropagation()}>
            <h3>Complete Order (Takeaway)</h3>
            <div style={{marginBottom: '8px'}}><strong>Items:</strong> {cartCount}</div>
            <label style={modalStyles.label}>Name</label>
            <input style={modalStyles.input} value={name} onChange={e => setName(e.target.value)} placeholder="Customer name" />
            <label style={modalStyles.label}>Phone</label>
            <input style={modalStyles.input} value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone number" />
            <div style={{display: 'flex', gap: '8px', marginTop: '12px'}}>
              <button onClick={submitOrder} className="btn">Place Order</button>
              <button onClick={toggleOpen} className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const modalStyles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  },
  modal: {
    background: '#fff',
    padding: '18px',
    borderRadius: '6px',
    width: '320px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.2)'
  },
  label: {
    display: 'block',
    fontSize: '13px',
    marginTop: '8px'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '4px',
    boxSizing: 'border-box'
  }
};

export default Header;
