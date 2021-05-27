import React from 'react'
import {connect} from 'react-redux'
import { Redirect, Route } from "react-router-dom"

const PrivateAdminRoute = (props) => {

  if(props.user.name == undefined) return <Redirect to="/" />
  if(props.user.role != 'admin') return <Redirect to="/" />
  return <Route {...props}/>
}

const mapStateToProps = (state) =>{
  return {
    user: state.user,
  }
}
export default connect(mapStateToProps, null)(PrivateAdminRoute)
