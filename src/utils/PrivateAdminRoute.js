import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateAdminRoute = (props) => {
  // console.log(props.user.role);
  if (props.user.role == 'admin') return <Route {...props} />;
  return null;
};

export default PrivateAdminRoute;
