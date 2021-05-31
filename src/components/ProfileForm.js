import React from 'react'

import Button from './Button'
import '../styles/components/ProfileForm.scss'
import { connect } from 'react-redux'

const ProfileForm = ({user}) => {
  return (
    <div className="form-container">
      <form action="">
        <div className="form-area">
          <label htmlFor="">Nombre</label>
          <input type="text" placeholder={user.name} />
        </div>
        <div className="form-area">
          <label htmlFor="">Apellido</label>
          <input type="text" placeholder={user.lastname} />
        </div>
        <div className="form-area">
          <label htmlFor="">Teléfono</label>
          <input type="text" placeholder="1140948366" />
        </div>
        <div className="form-area">
          <label htmlFor="">Correo electrónico</label>
          <input type="email" placeholder={user.email} />
        </div>
        <div className="form-area">
          <label htmlFor="">Contraseña</label>
          <input type="password" placeholder="Contraseña"/>
        </div>
        <div className="form-area">
          <label htmlFor="">Repetir Contraseña</label>
          <input type="password" placeholder="Contraseña"/>
        </div>
        <div className="form-area">
          <Button text="Actualizar" className="button"/>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)
