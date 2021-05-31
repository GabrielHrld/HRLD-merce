import React, { useState, useEffect } from 'react'
import MenuContainer from '../components/MenuContainer'
import ProfileForm from '../components/ProfileForm'
import ProfileCardsContainer from '../components/ProfileCardsContainer'
import '../styles/pages/Profile.scss'
import { connect } from 'react-redux'
import axios from 'axios'

const Profile = ({user}) => {
  // const [ordenes, setOrders] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //   setLoading(true)
  //   axios({
  //     url: 'http://localhost:3000/profile/my-orders',
  //     headers: {
  //       'Authorization': `Bearer ${user.access_token}`
  //     }
  //   })
  //   .then((res)=> {
  //     setOrders(res.data)
  //     setLoading(false)
  //   })
  //   .catch((error) => console.log(error))
  // }, [])


  return(<div className="profile-wrapper">
    <div className="profile-container">
      <MenuContainer 
        title1={'Mis datos'}
        comp1={<ProfileForm/>}
        title2={'Mis pedidos'}
        comp2= {<ProfileCardsContainer/>}
      />
    </div>
  </div>)
}

const mapStateToProps=(state)=>{
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Profile)
