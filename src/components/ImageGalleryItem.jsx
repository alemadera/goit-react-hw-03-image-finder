import React from 'react';

const ImageGalleryItem = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image);
  };

  // Generar una clave única basada en el ID de la imagen
  const key = `image-${image.id}`;

  return (
    <li key={key} className="ImageGalleryItem" onClick={handleClick}>
      <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
