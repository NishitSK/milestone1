import React from 'react';
import photo from '../assets/photo.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${photo})` }}>
      <div className="home-content">
        <h1 className="welcome-text">WELCOME</h1>
        <h2 className="sub-text">to our Restaurant</h2>
      </div>
    </div>
  );
}

