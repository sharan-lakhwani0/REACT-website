// Main.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Main.css';
import productsData from './products.json';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Enter your product name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <i className="fa-solid fa-magnifying-glass search-btn"></i>
      </div>
      
      <section className="product-grid">
        {filteredProducts.map(product => (
          <article key={product.id} className="card">
            {product.discount && <div className="offer">{product.discount}%</div>}
            <div className="info-1">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>{product.description}</h4>
            </div>
            <div className="info-2">
              <div className="showcase-rating">
                {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <div className="price-box">
                <p className="price">{product.price.toFixed(2)} &euro;</p>
                {product.discount && (
                  <del className="original-price">{product.priceBefore.toFixed(2)} &euro;</del>
                )}
                <button>Add</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
