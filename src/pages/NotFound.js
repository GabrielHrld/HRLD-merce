import React from 'react';
import { Helmet } from 'react-helmet';

import NotFoundImage from '../../assets/404.png';
import '../styles/pages/NotFound.scss';

const NotFound = () => {
  return (
    <div className="notFound-wrapper">
      <Helmet>
        <title>Página no encontrada | HRLD-merce</title>
        <meta
          name="description"
          content="Página no encontrada. HRLD-merce es un fake e-commerce diseñado y desarrollado por @HeraldHRLD (github), espero que lo disfrutes."
        />
      </Helmet>
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
