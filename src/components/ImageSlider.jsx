import React, { useState, useEffect } from 'react';
import '../ImageSlider.css';

const ImageSlider = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState({ src: '', alt: '' });

  // Array of your images from public folder
  const images = [
    { src: '/img/pic 1.jpg', alt: 'Image 1' },
    { src: '/img/pic 2.jpg', alt: 'Image 2' },
    { src: '/img/pic 3.jpg', alt: 'Image 3' },
    { src: '/img/pic 4.jpg', alt: 'Image 4' },
    { src: '/img/pic 5.jpg', alt: 'Image 5' },
    { src: '/img/pic 6.jpg', alt: 'Image 6' },
    { src: '/img/pic 7.jpg', alt: 'Image 7' },
    { src: '/img/pic 8.jpg', alt: 'Image 8' },
    { src: '/img/pic 9.jpg', alt: 'Image 9' },
    { src: '/img/pic 10.jpg', alt: 'Image 10' }
  ];

  // Handle image click
  const handleImageClick = (image) => {
    setPopupImage(image);
    setShowPopup(true);
  };

  // Close popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showPopup) {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showPopup]);

  return (
    <div className="image-slider-container">
      <div className="banner">
        <div className="slider" style={{ '--quantity': 10 }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="item"
              style={{ '--position': index + 1 }}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
        <div className="content">
          {/* Removed 3D GALLERY text */}
        </div>
      </div>

      {/* Enhanced Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={popupImage.src} alt={popupImage.alt} className="popup-image" />
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;