import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>Book Search</h1>
      <p>What are you looking for?</p>
      <img className='hero' src='./public/images/books.jpg' alt='books on shelf' />
      
    </div>
  );
}

export default HeroSection;