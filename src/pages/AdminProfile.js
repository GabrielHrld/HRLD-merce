import React from 'react';
import MenuContainer from '../components/MenuContainer';
import ProfileCardsContainer from '../components/ProfileCardsContainer';
import PanelProducts from '../components/PanelProducts';
import ChartsContainer from '../components/ChartsContainer';

const AdminProfile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <MenuContainer
          title1={'Productos'}
          comp1={<PanelProducts />}
          title2={'Ordenes'}
          comp2={<ProfileCardsContainer />}
          
        />
      </div>
    </div>
  );
};

export default AdminProfile;
