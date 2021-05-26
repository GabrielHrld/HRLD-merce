import React from 'react'
import { Link} from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Button from '../components/Button'
import '../styles/pages/SignIn.scss'

const SignIn = () => {


  return (
    <div className="signIn-wrapper">
      <header>
        <nav>
          <div className="logoContainer" >
            <Link to ="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
        </nav>
      </header>
      <div className="signIn-container">
        <div className="signIn-card">
          <div className="signIn-title">
            <h2>Ingresar</h2>
          </div>
          <div className="form-container">
            <form action="">
              
              <div>
                <label htmlFor="">Ingrese su correo electrónico</label>
                <input type="email" placeholder="example@email.com"/>
              </div>
              <div>
                <label htmlFor="">Ingrese su contraseña</label>
                <input type="password" />
              </div>
              
              
              <div className="btn-container">
                <Button text={'Ingresar'}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
