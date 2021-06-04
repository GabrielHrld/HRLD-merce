import React, { useEffect, useState } from 'react';

import Spinner from './Spinner';
import OrderCard from '../components/OrderCard';
import '../styles/components/ProfileCardsContainer.scss';
import Modal from './Modal';
import { connect } from 'react-redux';
import axios from 'axios';
import { config } from '../utils/config';

const ProfileCardsContainer = ({ user, admin }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (admin) {
      return axios({
        url: `${config.api_url}/orders`,
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
        .then((res) => {
          setOrders(res.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
    axios({
      url: `${config.api_url}/profile/my-orders`,
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className="cards-wrapper">
          <div className="cards-container">
            {orders.map((order) => (
              <div key={order.name}>
                <OrderCard order={order} />
              </div>
            ))}
          </div>
          <Modal />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ProfileCardsContainer);
