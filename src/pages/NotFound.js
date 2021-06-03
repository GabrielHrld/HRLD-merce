import React from 'react';

import NotFoundImage from '../../assets/404.png';
import '../styles/pages/NotFound.scss';

const NotFound = () => {
  return (
    <div className="notFound-wrapper">
      <div className="notFound-container">
        <div className="notFound-message_container">
          <div className="image-container">
            <img src={NotFoundImage} alt="" />
          </div>
          <div className="text-container">
            <h2>La página que buscaba no ha sido encontrada</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
