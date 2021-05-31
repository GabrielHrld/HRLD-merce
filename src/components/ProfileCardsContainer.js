import React, {useEffect, useState} from 'react'
import  Pagination  from './Pagination';

import Spinner from './Spinner'
import OrderCard from '../components/OrderCard'
import '../styles/components/ProfileCardsContainer.scss'
import {ordersMock} from '../utils/ordersMock';
import Modal from './Modal';
import { connect } from 'react-redux';
import axios from 'axios';

const ProfileCardsContainer = ({user, admin}) => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    if(admin){
      axios({
        url: 'http://localhost:3000/orders',
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJzdWIiOiI2MDlmY2Y2OTU0NDM4NDE5ZTg5ZTExYmQiLCJpYXQiOjE2MjI0NzI5MDB9.qa0A7I6MtdZIcrg7QtM_PgyAi8N20LE324Gw4QFIXNQ`
        }
      })
      .then((res)=> {
        setOrders(res.data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
      
    }
      axios({
        url: 'http://localhost:3000/profile/my-orders',
        headers: {
          'Authorization': `Bearer ${user.access_token}`
        }})
        .then((res)=> {
          setOrders(res.data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }
  , [])
  
  return (
    <div>
    {
    loading  ? <div><Spinner /></div> :
    <div className="cards-wrapper">
      <div className="cards-container">
        {orders.map((order) => <div key={order.name} ><OrderCard  order={order} /></div>)}
      </div>
      <Modal />
      </div>
    }
  </div>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(ProfileCardsContainer)
