import React from 'react'
import MenuContainer from '../components/MenuContainer'

import ProfileForm from '../components/ProfileForm'
import ProfileCardsContainer from '../components/ProfileCardsContainer'
import '../styles/pages/Profile.scss'

const ProfileOrders = () => (
  <div className="profile-wrapper">
    <div className="profile-container">
      <MenuContainer 
        title1={'Mis datos'}
        comp1={<ProfileForm/>}
        title2={'Mis pedidos'}
        comp2= {<ProfileCardsContainer />}
      />
    </div>
  </div>
  )

export default ProfileOrders
