import React from 'react';
import MenuContainer from '../components/MenuContainer';
import ProfileCardsContainer from '../components/ProfileCardsContainer';
import PanelProducts from '../components/PanelProducts';
import { Helmet } from 'react-helmet';

const AdminProfile = () => {
  return (
    <div className="profile-wrapper">
      <Helmet>
        <title>Profile - admin | HRLD-merce</title>
        <meta
          name="description"
          content="Perfil de administrador. Desde el mismo, usted puede modificar los detalles de un producto, así como añadir un producto o eliminarlo. Por otra parte, puede ver por completo el historial de órdenes, así como cambiar el estado de las mismas."
        />
      </Helmet>
      <div className="profile-container">
        <MenuContainer
          title1={'Productos'}
          comp1={<PanelProducts dark="true" />}
          title2={'Ordenes'}
          comp2={<ProfileCardsContainer admin />}
        />
      </div>
    </div>
  );
};

export default AdminProfile;
