import React, { useState } from 'react'
import {connect} from 'react-redux'
import NumberFormat from 'react-number-format'


import {BsBoxArrowUpRight} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'

import Button from './Button'
import {handleModal} from '../actions'
import '../styles/components/ModalProduct.scss'

const ModalProduct = ({user, modal, modalClick, handleModal}) => {
  if(modal.name == undefined) {
    return (<div></div>)
  }
 
  const handleClick = () => handleModal()


  return (
    <div className={modalClick ? "modal-wrapper active-modal" :"modal-wrapper"}>
      <header>
        <FaTimes onClick={handleClick}/>
      </header>
      <div className="modal-container">
        <div className="modal-names">
          <h3>Nombre: </h3>
          <p><input type="text" placeholder={modal.name}/></p>
        </div>
        <div className="modal-names">
          <h3>Descripción: </h3>
          <p><textarea name="" id="" cols="30" rows="10" placeholder={modal.description}></textarea></p>
        </div>
        <div className="modal-names">
          <h3>Color: </h3>
          <p> <input type="text" placeholder={modal.color}/></p>
        </div>
        
      </div>
        <footer>
          <div className="total">
            <span>Precio:</span>
            <h3>$ <input type="number" placeholder={modal.price} min="1"/> </h3>
          </div>
          <div className="status">
            <Button text="Modificar" className="button"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct)
