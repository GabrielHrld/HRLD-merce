import React, {useState} from 'react'
import  Pagination  from './Pagination';

import OrderCard from '../components/OrderCard'
import '../styles/components/ProfileCardsContainer.scss'
import {ordersMock} from '../utils/ordersMock';
import Modal from './Modal';

const ProfileCardsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setProductsPerPage] = useState(9);

  //Get current orders
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder-ordersPerPage;
  const currentOrders = ordersMock.slice(indexOfFirstOrder, indexOfLastOrder)

  // Change orders
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="cards-wrapper">
      <div className="cards-container">
        {currentOrders.map((order) => <div key={order.name} ><OrderCard  order={order} /></div>)}
      </div>
      <Modal />
      <Pagination 
        productsPerPage={ordersPerPage} 
        totalProducts={ordersMock.length} 
        paginate={paginate}
        className="pagination-wrapper"
        dark={true}
      />
    </div>
  )
}

export default ProfileCardsContainer
