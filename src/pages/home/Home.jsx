import React, { useState, useEffect } from 'react';
import img1 from '../../assets/carousel/img1.jpg';
import img2 from '../../assets/carousel/img2.png';
import img3 from '../../assets/carousel/img3.jpg';

const images = [img1, img2, img3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Ganti gambar setiap 3 detik
    return () => clearInterval(interval);
  }, [currentImage]); // Ketika currentImage berubah, jeda timer dan mulai timer baru

  const goToNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel" style={{ height: '600px', position: 'relative', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`mx-auto absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ width: '100vw', height: '100%', objectFit: 'cover' }}
        />
      ))}
    </div>
  );
};

export default Home;
