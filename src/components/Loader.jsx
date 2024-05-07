import React from 'react';
import {ThreeDots} from 'react-loader-spinner';
import '../index.css';

const Loader = () => {
  return (
      <div className="loader">
        <ThreeDots color="#00BFFF" height={50} width={50} />
      </div>
    
  );
};

export default Loader;
