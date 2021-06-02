import React, { useEffect } from 'react';
import MenuContainer from '../components/MenuContainer';
import ProfileCardsContainer from '../components/ProfileCardsContainer';
import PanelProducts from '../components/PanelProducts';
import axios from 'axios';

const AdminProfile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <MenuContainer
          title1={'Productos'}
          comp1={<PanelProducts dark={true} />}
          title2={'Ordenes'}
          comp2={<ProfileCardsContainer admin />}
        />
      </div>
    </div>
  );
};

export default AdminProfile;
