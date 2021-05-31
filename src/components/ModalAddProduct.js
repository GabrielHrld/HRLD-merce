import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {FaTimes} from 'react-icons/fa'
import axios from 'axios'

import Button from './Button'
import {handleModal, handleModalAddProduct} from '../actions'
import '../styles/components/ModalAddProduct.scss'

const sizes = ['xs', 's', 'm', 'l', 'xl'];

const ModalAddProduct = ({user, modalAddProductClick, handleModalAddProduct}) => {
  // ARREGLAR LA IMAGEN QUE NO SE MUESTRA EL PREVIEW
  const reader = new FileReader()
  const [fieldsError, setFieldsError] = useState(false)
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    price: 1,
    stock: 1,
    color: '',
    image: '',
    sale: false,
    sizeAvailable: []

  })
  const [image, setImage] = useState("")
  const base64Image = window.btoa(image);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(
      (product.name || 
       product.description || 
       product.category ||
       product.color == ''
      )
      ){
      axios({
          method: 'post',
          url: 'https://api.imgur.com/3/upload/',
          headers: {Authorization: 'Client-ID 8a4df7500e45c80'},
          data: base64Image,
        })
        .then((res) => {
          setProduct({...product, image: res.data.data.link})
          console.log(product)
          axios.post('http://localhost:3000/products', product, {
            headers: {
              'Authorization': `Bearer ${user.access_token}`
            }
          })
          .then((res)=> console.log(res))
          .catch((error) => console.log(error))
        })
        .catch((err)=>{console.log(err)})
      } else {
        setFieldsError(true)
        setTimeout(()=> setFieldsError(false), 5000)
      }
  }
    
  const handlePrice = (e) => {
    let price = parseInt(e.target.value)
    setProduct({...product, price})
  }
  const handleStock= (e) => {
    let stock = parseInt(e.target.value)
    setProduct({...product, stock})
  }  
  const handleSizes = (e) => {
    console.log(e.target.value)
    setProduct({...product, sizeAvailable: [...product.sizeAvailable, e.target.value]})
  }

  const handleChange = (e) => {
    e.preventDefault()
    setProduct({...product, [e.target.name]: e.target.value})
  }
  
  const handleClick = () => handleModalAddProduct()

  const handleImage = (e) =>{
    const selected = e.target.files[0]
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    if (selected && ALLOWED_TYPES.includes(selected.type)){
      reader.onloadend = () => {
        console.log(reader.result)
        setImage(reader.result)
      };
      reader.readAsBinaryString(selected)
    } else {
      console.log('file not supported')
    }
  }

  return (
    <div className={modalAddProductClick ? "modalProduct-wrapper active-modal" :"modalProduct-wrapper"}>
      <header>
        <FaTimes onClick={handleClick} className="icon"/>
        <h3>Añadir un producto</h3>
      </header>
      <form action="">
        <div className="modal-container">
          <div className="modal-names">
            <h3>Nombre: </h3>
            <p><input type="text" placeholder="Nombre" name="name" value={product.name} onChange={handleChange}/></p>
          </div>
          <div className="modal-names">
            <h3>Categoría: </h3>
            <p><input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Categoría"/></p>
          </div>
          <div className="modal-names">
            <h3>Descripción: </h3>
            <p><textarea name="description" id="" cols="30" rows="10" placeholder="Descripción" value={product.description} onChange={handleChange}></textarea></p>
          </div>
          <div className="modal-names">
            <h3>Color: </h3>
            <p> <input type="text" placeholder="Rojo" name="color" value={product.color} onChange={handleChange}/></p>
          </div>
          <div className="modal-names">
            <div className="sale">
              <h3>Sale: </h3>
              <p> <input type="radio" onChange={()=> setProduct({...product, sale: true})}/></p>

            </div>
          </div>
          <div className="modal-names">
            <h3>Talles disponibles: </h3>
            <p> {sizes.map((size, index) => (
              <div className="sizes-container" key={size+index}>
                <label htmlFor={size}>{size}</label>
                <input type="radio" value={size} id={size} onChange={handleSizes}/>
              </div>
            ))}</p>
          </div>
          <div className="modal-names">
            <h3>Imagen: </h3>
            <p> <input type="file" onChange={handleImage}/></p>
          </div>
        </div>
        <footer>
          <div className="total">
            <span>Precio:</span>
            <h3>$ <input type="number" min="1" value={product.price} onChange={handlePrice}/> </h3>
          </div>
          <div className="total">
            <span>Stock:</span>
            <h3><input type="number" min="1" value={product.stock} onChange={handleStock}/> </h3>
          </div>
          <div className="status" onClick={handleSubmit}>
            <Button text="Cargar Producto" type="submit" className="button"/>
          </div>
        </footer>
      </form>
      <div className={fieldsError ? "error-wrapper active" : "error-wrapper"}>
        <div className="error-container">
          <h3><b>Error: </b>completá todos los campos por favor</h3>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    modalClick: state.modalClick,
    user: state.user,
    modalAddProductClick: state.modalAddProductClick
  }
}

const mapDispatchToProps = {
  handleModal,
  handleModalAddProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddProduct)
