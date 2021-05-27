import React, { useState } from 'react'
import {connect} from 'react-redux'
import NumberFormat from 'react-number-format'


import {BsBoxArrowUpRight} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'

import {handleModal} from '../actions'
import '../styles/components/Modal.scss'

const Modal = ({user, modal, modalClick, handleModal}) => {
  if(modal == {}) {
    return (<div></div>)
  }
 
  const handleClick = () => handleModal()

  let sum = 0;
  if(modal.name != undefined ) modal.products.forEach((element) => sum += element.quantity * element.price)
  

  return (
    <div className={modalClick ? "modal-wrapper active-modal" :"modal-wrapper"}>
      <header>
        <FaTimes onClick={handleClick}/>
        <h2>Detalles de la órden</h2>
      </header>
      <div className="modal-container">
        <div className="modal-names">
          <h3>Nombre: </h3>
          <p>{modal.name}</p>
        </div>
        <div className="modal-names">
          <h3>Dirección: </h3>
          <p>{modal.address}, {modal.state}</p>
        </div>
        <div className="modal-names">
          <h3>Código Postal: </h3>
          <p>{modal.postal}</p>
        </div>
        <div className="modal-names">
          <h3>Teléfono: </h3>
          <p>{modal.phone}</p>
        </div>
        <div className="modal-list_container">
          <h3>Productos:</h3>
          <ul className="modal-list">
            {
              modal.products != undefined ?
              modal.products.map((product) => (
                <li className="modal-list_item">
                  <div className="modal-product">
                    <span>
                      {product.name}
                      <strong>x{product.quantity} 
                      <NumberFormat
                        value={product.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                      />
                      </strong>
                    </span>
                  </div>
                </li>
              ))  : <div></div>
            }
          </ul>
        </div>
      </div>
        <footer>
          <div className="total">
            <span>Total:</span>
            <h3><NumberFormat
                  value={sum}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                /></h3>
          </div>
          <div className="status">
            <span>Estado:</span>
            {
              user.role == 'admin' ? (
                <form>
                  <select >
                    <option value="pending">En proceso</option>
                    <option value="onWay">En camino</option>
                    <option value="delivered">Entregado</option>
                  </select>
                  <button type="submit">
                    <BsBoxArrowUpRight className="icon"/>
                  </button>
                </form>
              ) : (<h3>{modal.status}</h3>)
            }
            
          </div>
        </footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    modalClick: state.modalClick,
    modal: state.modal,
    user: state.user
  }
}

const mapDispatchToProps = {
  handleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
