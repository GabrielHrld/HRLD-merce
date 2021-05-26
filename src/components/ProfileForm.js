import React from 'react'

import Button from './Button'
import '../styles/components/ProfileForm.scss'

const ProfileForm = () => {
  return (
    <div className="form-container">
      <form action="">
        <div className="form-area">
          <label htmlFor="">Nombre</label>
          <input type="text" placeholder="Nombre" />
        </div>
        <div className="form-area">
          <label htmlFor="">Apellido</label>
          <input type="text" placeholder="Apellido" />
        </div>
        <div className="form-area">
          <label htmlFor="">Número</label>
          <input type="text" placeholder="1140948366" />
        </div>
        <div className="form-area">
          <label htmlFor="">Correo</label>
          <input type="email" placeholder="example@email.com" />
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

export default ProfileForm
