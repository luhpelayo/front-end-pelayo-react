// src/components/WelcomeView.js
import React from 'react';
import { Link } from 'react-router-dom';
import './welcome_view.css'; // Importa el archivo de estilos CSS

const WelcomeView = () => {
  return (
    <div className="welcome-container">
      <h1 className="title">¡Hi, I'm Pelayo!</h1>
      <div className="button-container">
        <Link to="/galeria" className="portfolio-button">
          Rotating Gallery of images
        </Link>
        {/* Agrega más enlaces para otras plantillas */}
      </div>
    </div>
  );
};

export default WelcomeView;

