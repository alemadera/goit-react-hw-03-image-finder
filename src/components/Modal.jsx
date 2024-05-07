import React from 'react';

const Modal = ({ image, closeModal }) => {
  const handleClose = () => {
    closeModal();
  };

  return (
    <div className="Overlay" onClick={handleClose}>
      <div className="Modal">
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
