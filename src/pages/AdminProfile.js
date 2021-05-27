import React from 'react';
import MenuContainer from '../components/MenuContainer';
import ProfileCardsContainer from '../components/ProfileCardsContainer';
import ProfileForm from '../components/ProfileForm';

const AdminProfile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <MenuContainer
          title1={'Ordenes'}
          comp1={<ProfileCardsContainer />}
          title2={'Products'}
          comp2={<ProfileForm />}
        />
      </div>
    </div>
  );
};

export default AdminProfile;
