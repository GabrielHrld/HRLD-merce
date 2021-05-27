import React from 'react'
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = (props) => {

  if (props.user.name == 'admin' || 'customer') {
    return (
      <Route {...props} />
    )
  } else {
    return(
      <Redirect to="/" />
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, null)(PrivateRoute)
