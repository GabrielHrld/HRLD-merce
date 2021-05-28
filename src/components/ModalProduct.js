import React, { useRef, useState } from 'react'
import {connect} from 'react-redux'
import NumberFormat from 'react-number-format'


import {BsBoxArrowUpRight} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'

import Button from './Button'
import {handleModal} from '../actions'
import '../styles/components/ModalProduct.scss'

const ModalProduct = ({user, modal, modalClick, handleModal}) => {
  const [image, setImage] = useState("")
  if(modal.name == undefined) {
    return (<div></div>)
  }
  const handleClick = () => handleModal()

  const handleImage = (e) =>{
    const selected = e.target.files[0]
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    if (selected && ALLOWED_TYPES.includes(selected.type)){
      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result)
      };
      reader.readAsDataURL(selected)
    } else {
      console.log('file not supported')
    }
  }

  return (
    <div className={modalClick ? "modalProduct-wrapper active-modal" :"modalProduct-wrapper"}>
      <header>
        <FaTimes onClick={handleClick}/>
      </header>
      <form action="">
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
          <div className="modal-names">
            <h3>Imágenes: </h3>
            <p> <input type="file" onChange={handleImage}/></p>
            {image == "" ? <div></div> : <figure className="image-container">
              <img src={image} alt="" />
            </figure>}
          </div>
        </div>
        <footer>
          <div className="total">
            <span>Precio:</span>
            <h3>$ <input type="number" placeholder={modal.price} min="1"/> </h3>
          </div>
          <div className="total">
            <span>Stock:</span>
            <h3><input type="number" placeholder={modal.stock} min="1"/> </h3>
          </div>
          <div className="status">
            <Button text="Modificar" className="button"/>
          </div>
        </footer>
      </form>
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
