import React from 'react';
import { Helmet } from 'react-helmet';
import MenuContainer from '../components/MenuContainer';
import ProfileForm from '../components/ProfileForm';
import ProfileCardsContainer from '../components/ProfileCardsContainer';
import '../styles/pages/Profile.scss';
import { connect } from 'react-redux';

const Profile = ({ user }) => {
  return (
    <div className="profile-wrapper">
      <Helmet>
        <title>{user.name} | HRLD-merce</title>
        <meta
          name="description"
          content="Perfil del usuario. HRLD-merce es un fake e-commerce diseñado y desarrollado por @HeraldHRLD (github), espero que lo disfrutes."
        />
      </Helmet>
      <div className="profile-container">
        <MenuContainer
          title1={'Mis datos'}
          comp1={<ProfileForm />}
          title2={'Mis pedidos'}
          comp2={<ProfileCardsContainer />}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Profile);
