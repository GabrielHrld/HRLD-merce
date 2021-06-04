import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';

import Button from './Button';
import { handleModal } from '../actions';
import '../styles/components/ModalProduct.scss';
import axios from 'axios';
import useMessages from '../hooks/useMessages';
import { config } from '../utils/config';

const ModalProduct = ({ user, modal, modalClick, handleModal }) => {
  if (modal.name == undefined) {
    return <div></div>;
  }

  const history = useHistory();
  const [productModify, setProductModify] = useState({
    name: '',
    description: '',
    color: '',
    image: '',
    price: 1,
    stock: 1,
  });
  const [success, setSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [internalError, setInternalError] = useState(false);
  const [image, setImage] = useState('');
  const base64Image = window.btoa(image);

  const handleClick = () => handleModal();

  const handleChange = (e) => {
    e.preventDefault();
    setProductModify({ ...productModify, [e.target.name]: e.target.value });
  };

  //FUNCION PARA ELIMINAR PRODUCTO
  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm('¿Seguro desea eliminar el producto?') == true) {
      return axios
        .delete(`${config.api_url}/products/${modal._id}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((res) => {
          useMessages(setDeleteSuccess);
        })
        .then(() => setTimeout(() => handleClick(), 3000))
        .then(() =>
          setTimeout(() => {
            history.push('/');
            history.push('/admin/profile');
          }, 3500)
        )
        .catch((error) => console.log(error));
    }

    return null;
  };

  // FUNCION PARA ENVIAR LA MODIFICACIÓN
  const handleSubmit = (e) => {
    e.preventDefault();
    // SI LOS CAMPOS ESTÁN VACÍOS, LE ASIGNAMOS EL VALOR ANTERIOR
    if (productModify.name == '')
      setProductModify((productModify.name = modal.name));
    if (productModify.description == '')
      setProductModify((productModify.description = modal.description));
    if (productModify.color == '')
      setProductModify((productModify.color = modal.color));
    if (productModify.image == '')
      setProductModify((productModify.image = modal.image));
    if (productModify.stock == 1)
      setProductModify((productModify.stock = modal.stock));
    if (productModify.price == 1)
      setProductModify((productModify.price = modal.price));
    if (image.length > 0) {
      return axios({
        method: 'post',
        url: 'https://api.imgur.com/3/upload/',
        headers: { Authorization: 'Client-ID 8a4df7500e45c80' },
        data: base64Image,
      })
        .then((res) => {
          setProductModify((productModify.image = res.data.data.link));
          axios
            .put(
              `${config.api_url}/products/${modal._id}`,
              {
                ...productModify,
                price: parseInt(productModify.price),
                stock: parseInt(productModify.stock),
              },
              {
                headers: {
                  Authorization: `Bearer ${user.access_token}`,
                },
              }
            )
            .then(() => {
              useMessages(setSuccess);
            });
          setTimeout(() => handleClick(), 3000);
          setTimeout(() => {
            history.push('/');
            history.push('/admin/profile');
          }, 3500).catch(() => {
            useMessages(setInternalError);
          });
        })
        .catch((err) => {
          useMessages(setInternalError);
        });
    }

    return axios
      .put(
        `${config.api_url}/products/${modal._id}`,
        {
          ...productModify,
          price: parseInt(productModify.price),
          stock: parseInt(productModify.stock),
        },
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      )
      .then(() => {
        useMessages(setSuccess);
      })
      .then(() => setTimeout(() => handleClick(), 3000))
      .then(() =>
        setTimeout(() => {
          history.push('/');
          history.push('/admin/profile');
        }, 3500)
      )
      .catch(() => {
        useMessages(setInternalError);
      })
      .then(() => setTimeout(() => handleClick(), 3000))
      .then(() =>
        setTimeout(() => {
          history.push('/');
          history.push('/admin/profile');
        }, 3500)
      );
  };

  //FUNCION PARA MANEJAR LA CARGA DE LA IMAGEN
  const handleImage = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsBinaryString(selected);
    } else {
      console.log('file not supported');
    }
  };

  //RENDER
  return (
    <div
      className={
        modalClick
          ? 'modalProduct-wrapper active-modal'
          : 'modalProduct-wrapper'
      }
    >
      <header>
        <FaTimes onClick={handleClick} className="icon" />
      </header>
      <form action="">
        <div className="modal-container">
          <div className="modal-names">
            <h3>Nombre: </h3>
            <p>
              <input
                type="text"
                placeholder={modal.name}
                name="name"
                value={productModify.name}
                onChange={handleChange}
              />
            </p>
          </div>
          <div className="modal-names">
            <h3>Descripción: </h3>
            <p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder={modal.description}
                name="description"
                value={productModify.description}
                onChange={handleChange}
              ></textarea>
            </p>
          </div>
          <div className="modal-names">
            <h3>Color: </h3>
            <p>
              {' '}
              <input
                type="text"
                placeholder={modal.color}
                name="color"
                value={productModify.color}
                onChange={handleChange}
              />
            </p>
          </div>
          <div className="modal-names">
            <h3>Imagen: </h3>
            <p>
              {' '}
              <input type="file" onChange={handleImage} />
            </p>
          </div>
        </div>
        <footer className="footerModalProduct">
          <div className="total">
            <span>Precio:</span>
            <h3>
              ${' '}
              <input
                type="number"
                placeholder={modal.price}
                min="1"
                name="price"
                value={productModify.price}
                onChange={handleChange}
              />{' '}
            </h3>
          </div>
          <div className="total">
            <span>Stock:</span>
            <h3>
              <input
                type="number"
                placeholder={modal.stock}
                min="1"
                name="stock"
                value={productModify.stock}
                onChange={handleChange}
              />{' '}
            </h3>
          </div>
          <div className="status" onClick={handleDelete}>
            <Button text="Eliminar" className="button" />
          </div>
          <div className="status" onClick={handleSubmit}>
            <Button text="Modificar" className="button" />
          </div>
        </footer>
      </form>

      <div
        className={
          success
            ? 'message-success_wrapper activeMessage'
            : 'message-success_wrapper'
        }
      >
        <div className="message-success_container">
          <h3>Producto Modificado con éxito</h3>
        </div>
      </div>

      <div
        className={
          deleteSuccess
            ? 'message-success_wrapper activeMessage'
            : 'message-success_wrapper'
        }
      >
        <div className="message-success_container">
          <h3>Producto Eliminado con éxito</h3>
        </div>
      </div>

      <div
        className={
          internalError
            ? 'message-error_wrapper activeErrorMessage'
            : 'message-error_wrapper'
        }
      >
        <div className="message-error_container">
          <h3>Error interno</h3>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modalClick: state.modalClick,
    modal: state.modal,
    user: state.user,
  };
};

const mapDispatchToProps = {
  handleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct);
