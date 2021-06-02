import React, { useState } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';

import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

import useMessages from '../hooks/useMessages';
import { handleModal } from '../actions';
import '../styles/components/Modal.scss';
import axios from 'axios';

const Modal = ({ user, modal, modalClick, handleModal }) => {
  const history = useHistory();
  const [status, setStatus] = useState('en proceso');
  const [success, setSuccess] = useState(false);
  const [internalError, setInternalError] = useState(false);
  if (modal.name == undefined) {
    return <div></div>;
  }
  const handleClick = () => handleModal();

  const handleStatus = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };

  const handleEditStatus = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3000/orders/${modal._id}`,
        { status: status },
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
        // efecto de mensaje pulled down
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
        // efecto de mensaje pulled down
        setTimeout(() => {
          history.push('/');
          history.push('/admin/profile');
        }, 3500)
      );
  };

  let sum = 0;
  if (modal.name != undefined)
    modal.products.forEach(
      (element) => (sum += element.quantity * element.price)
    );

  return (
    <div
      className={modalClick ? 'modal-wrapper active-modal' : 'modal-wrapper'}
    >
      <header>
        <FaTimes onClick={handleClick} />
        <h2>Detalles de la órden</h2>
      </header>
      <div className="modal-container">
        <div className="modal-names">
          <h3>Nombre: </h3>
          <p>{modal.name}</p>
        </div>
        <div className="modal-names">
          <h3>Dirección: </h3>
          <p>
            {modal.address}, {modal.state}
          </p>
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
            {modal.products != undefined ? (
              modal.products.map((product) => (
                <li className="modal-list_item" key={product.id}>
                  <div className="modal-product">
                    <span>
                      {product.name}
                      <strong>
                        x{product.quantity}
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
              ))
            ) : (
              <div></div>
            )}
          </ul>
        </div>
      </div>
      <footer>
        <div className="total">
          <span>Total:</span>
          <h3>
            <NumberFormat
              value={sum}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </h3>
        </div>
        <div className="status">
          <span>Estado:</span>
          {user.role == 'admin' ? (
            <form>
              <select
                value={status}
                name="status"
                onChange={handleStatus}
                defaultValue="en proceso"
              >
                <option value="en proceso">En proceso</option>
                <option value="en camino">En camino</option>
                <option value="entregado">Entregado</option>
              </select>
              <button type="submit" onClick={handleEditStatus}>
                <BsBoxArrowUpRight className="icon" />
              </button>
            </form>
          ) : (
            <h3>{modal.status}</h3>
          )}
        </div>
      </footer>
      <div
        className={
          success
            ? 'message-success_wrapper activeMessage'
            : 'message-success_wrapper'
        }
      >
        <div className="message-success_container">
          <h3>Estado de órden modificado con éxito</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
