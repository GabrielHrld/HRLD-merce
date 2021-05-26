import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Button from '../components/Button'
import '../styles/pages/SignUp.scss'

const SignUp = () => {

  const handlePush = () => useHistory().push("/")

  return (
    <div className="signUp-wrapper">
      <header>
        <nav>
          <div className="logoContainer" onClick={handlePush}>
            <Link to ="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
        </nav>
      </header>
      <div className="signUp-container">
        <div className="signUp-card">
          <div className="signIn-title">
            <h2>Registrarse</h2>
          </div>
          <div className="form-container">
            <form action="">
              <div>
                <label htmlFor="">Ingrese su nombre completo</label>
                <input type="text" placeholder="Nombre Completo"/>
              </div>
              <div>
                <label htmlFor="">Ingrese su apellido</label>
                <input type="text" placeholder="Apellido"/>
              </div>
              <div>
                <label htmlFor="">Ingrese su correo electrónico</label>
                <input type="email" placeholder="example@email.com"/>
              </div>
              <div>
                <label htmlFor="">Ingrese una contraseña</label>
                <input type="password" placeholder="contraseña"/>
              </div>
              <div>
                <label htmlFor="">Repita la contraseña</label>
                <input type="password" placeholder="contraseña"/>
              </div>
              <div>
                <label htmlFor="">Deseo recibir promociones por email</label>
                <input type="checkbox" />
              </div>
              <div className="btn-container">
                <Button text={'Registrarse'}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
