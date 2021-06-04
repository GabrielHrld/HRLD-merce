import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = (props) => {
  console.log(props.user);
  if (props.user.role == 'customer') {
    return <Route {...props} />;
  } else {
    return null;
  }
};

export default PrivateRoute;
