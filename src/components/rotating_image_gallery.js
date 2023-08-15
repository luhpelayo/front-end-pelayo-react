import React from 'react';
import './rotating_image_gallery.css'; // Importa tu archivo CSS

const RotatingImageGallery = () => {
  return (
    <div
      className="box"
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        transformStyle: 'preserve-3d',
        animation: 'animate 20s linear infinite',
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            transformOrigin: 'center',
            transformStyle: 'preserve-3d',
            transform: `rotateY(calc(${i} * 45deg)) translateZ(400px)`,
            WebkitBoxReflect: 'below 0px linear-gradient(transparent,transparent, #0004)',
          }}
        >
          <img
            src={`/img/image${i}.jpg`}
            alt=""
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default RotatingImageGallery;
