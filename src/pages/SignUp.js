import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';

import { expresiones } from '../utils/regex';
import InputForm from '../components/InputForm';
import Logo from '../../assets/logo.png';
import Button from '../components/Button';
import '../styles/pages/SignUp.scss';
import axios from 'axios';

const SignUp = () => {
  let history = useHistory();
  const [name, setName] = useState({ field: '', valid: null });
  const [lastname, setLastname] = useState({ field: '', valid: null });
  const [email, setEmail] = useState({ field: '', valid: null });
  const [phone, setPhone] = useState({ field: '', valid: null });
  const [pass, setPass] = useState({ field: '', valid: null });
  const [pass2, setPass2] = useState({ field: '', valid: null });
  const [promos, setPromos] = useState(false);
  const [validForm, setValidForm] = useState(null);
  const [validEmail, setValidEmail] = useState(null);
  const user = {
    name: name.field,
    lastname: lastname.field,
    email: email.field,
    phone: phone.field,
    password: pass.field,
    promo: promos,
    role: 'customer',
    createdAt: moment().format('LLL'),
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.valid &&
      lastname.valid &&
      email.valid &&
      phone.valid &&
      pass.valid &&
      pass2.valid
    ) {
      setValidForm(true);
      setName({ field: '', valid: null });
      setLastname({ field: '', valid: null });
      setEmail({ field: '', valid: null });
      setPhone({ field: '', valid: null });
      setPass({ field: '', valid: null });
      setPass2({ field: '', valid: null });
      setPromos(false);
      axios
        .post('http://localhost:3000/users', user, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          history.push('/sign-in');
        })
        .catch((error) => {
          if (error.response.data.statusCode == 406) {
            setValidEmail(false);
            history.push('/sign-up');
          }
        });
    } else {
      setValidForm(false);
    }
  };

  const validatePassword = () => {
    if (pass.field.length > 0) {
      if (pass2.field != pass.field) {
        setPass2({ ...pass2, valid: false });
      } else {
        setPass2({ ...pass2, valid: true });
      }
    }
  };

  return (
    <div className="signUp-wrapper">
      <header>
        <nav>
          <div className="logoContainer">
            <Link to="/">
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
            <form action="" onSubmit={onSubmit}>
              <InputForm
                state={name}
                setState={setName}
                regex={expresiones.nombre}
                label="Ingrese su nombre completo"
                type="text"
                placeholder="Nombre Completo"
                name="name"
              />
              <InputForm
                state={lastname}
                setState={setLastname}
                regex={expresiones.nombre}
                label="Ingrese su apellido"
                type="text"
                placeholder="Apellido"
                name="lastname"
              />
              <InputForm
                state={email}
                setState={setEmail}
                regex={expresiones.correo}
                label="Ingrese su correo electrónico"
                type="email"
                placeholder="example@email.com"
                name="email"
              />
              <InputForm
                state={phone}
                setState={setPhone}
                regex={expresiones.telefono}
                label="Ingrese su teléfono"
                type="text"
                placeholder="11 0000 0000"
                name="phone"
              />
              <InputForm
                state={pass}
                setState={setPass}
                regex={expresiones.password}
                label="Ingrese una contraseña"
                type="password"
                placeholder="********"
                name="password"
              />
              <InputForm
                state={pass2}
                setState={setPass2}
                regex={expresiones.password}
                label="Repita la contraseña"
                type="password"
                placeholder="********"
                name="password2"
                validatePass={validatePassword}
              />
              <InputForm
                state={promos}
                setState={setPromos}
                label="Deseo recibir promociones por correo"
                type="checkbox"
                name="promo"
                checked={promos}
                promo
              />
              <div>
                {validForm === false && (
                  <p className="text-error danger">
                    <b>Error:</b> Por favor rellena el formulario correctamente
                  </p>
                )}
                {validEmail === false && (
                  <p className="text-error danger">
                    <b>Error:</b> Por favor elegí otra dirección de correo
                    electrónico
                  </p>
                )}
              </div>
              <div className="btn-container">
                <span>
                  <Button text={'Registrarse'} className="button" />
                </span>
              </div>
            </form>
          </div>
          <p className="redirect">
            ¿Ya tienes cuenta? <a href="/sign-in">Ingresa</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
