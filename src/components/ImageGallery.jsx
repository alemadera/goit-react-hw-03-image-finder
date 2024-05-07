import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        <ImageGalleryItem key={index} image={image} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
