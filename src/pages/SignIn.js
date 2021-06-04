import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { handleUser } from '../actions/index';
import { expresiones } from '../utils/regex';
import Logo from '../../assets/logo.png';
import Button from '../components/Button';
import InputForm from '../components/InputForm';
import '../styles/pages/SignIn.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import { config } from '../utils/config';

const SignIn = ({ handleUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState({ field: '', valid: null });
  const [error, setError] = useState(false);
  const [pass, setPass] = useState({ field: '', valid: null });
  const user = {
    email: email.field,
    password: pass.field,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.valid && pass.valid) {
      setEmail({ field: '', valid: null });
      setPass({ field: '', valid: null });
      axios
        .post(`${config.api_url}/auth/login`, user, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          const { data } = res;
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data));
          handleUser(data);
          setError(false);
          history.push('/');
          window.location.reload(true);
        })
        .catch(() => setError(true));
    }
  };
  return (
    <div className="signIn-wrapper">
      <Helmet>
        <title>Ingresar | HRLD-merce</title>
        <meta
          name="description"
          content="Ingresar. HRLD-merce es un fake e-commerce diseñado y desarrollado por @HeraldHRLD (github), espero que lo disfrutes."
        />
      </Helmet>
      <header>
        <nav>
          <div className="logoContainer">
            <Link to="/">
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
            <form action="" onSubmit={handleSubmit}>
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
                state={pass}
                setState={setPass}
                regex={expresiones.password}
                label="Ingrese una contraseña"
                type="password"
                placeholder="********"
                name="password"
              />
              {error ? (
                <p className="error">Email o contraseña inválidos.</p>
              ) : null}
              <div className="btn-container">
                <Button text={'Ingresar'} />
              </div>
            </form>
            <p className="redirect">
              ¿No tienes cuenta? <a href="/sign-up">Create una</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  handleUser,
};
export default connect(null, mapDispatchToProps)(SignIn);
