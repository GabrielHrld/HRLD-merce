import React, { useState } from 'react'
import {connect} from 'react-redux'
import {handleModal} from '../actions'

import {FaTimes} from 'react-icons/fa'

import '../styles/components/Modal.scss'
import NumberFormat from 'react-number-format'

const Modal = ({modal, modalClick, handleModal}) => {
  if(modal == {}) {
    return (<div></div>)
  }
 
  const handleClick = () => handleModal()

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
            {/* <li className="modal-list_item">
              <div className="modal-product">
                <span>PANTALON AZUL MOCHA <strong>x3 $1234</strong></span>
              </div>
            </li>
            <li className="modal-list_item">
              <div>
                <span>PANTALON AZUL MOCHA <strong>x3 $1234</strong></span>
              </div>
            </li>
            <li className="modal-list_item">
              <div>
                <span>PANTALON AZUL MOCHA <strong>x3 $1234</strong></span>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
        <footer>
          <div>
            <span>Total:</span>
            <h3>$1234</h3>
          </div>
          <div>
            <span>Estado:</span>
            <h3>{modal.status}</h3>
          </div>
        </footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    modalClick: state.modalClick,
    modal: state.modal
  }
}

const mapDispatchToProps = {
  handleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
