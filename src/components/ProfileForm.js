import React, { useState } from 'react';

import Button from './Button';
import '../styles/components/ProfileForm.scss';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import Spinner from './Spinner';

import { expresiones } from '../utils/regex';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ProfileForm = ({ user }) => {
  const history = useHistory();
  const [name, setName] = useState({ field: '', valid: null });
  const [lastName, setLastname] = useState({ field: '', valid: null });
  const [phone, setPhone] = useState({ field: '', valid: null });
  const [email, setEmail] = useState({ field: '', valid: null });
  const [pass, setPass] = useState({ field: '', valid: null });
  const [pass2, setPass2] = useState({ field: '', valid: null });
  const [message, setMessage] = useState({ field: '', valid: null, color: '' });
  const [changePass, setChangePass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newPass, setNewPass] = useState({ field: '', valid: null });

  const userToModify = {
    name: name.field == '' ? user.name : name.field,
    lastname: lastName.field == '' ? user.lastname : lastName.field,
    phone: phone.field == '' ? user.phone : phone.field,
    email: email.field == '' ? user.email : email.field,
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

  const handleChangePass = (e) => {
    setChangePass(!changePass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (pass2.valid == false || pass2.valid == null) {
      return setMessage({
        field: 'Las contraseñas deben coincidir antes de enviar los cambios',
        valid: true,
        color: '#db0000',
      });
    }

    if (pass2.valid == true) {
      return axios
        .post(
          'http://localhost:3000/auth/login',
          { email: user.email, password: pass.field },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then(() => {
          axios
            .put(
              `http://localhost:3000/users/${user._id}`,
              changePass
                ? { ...userToModify, password: newPass.field }
                : userToModify,
              {
                headers: {
                  Authorization: `Bearer ${user.access_token}`,
                },
              }
            )
            .then((res) => {
              setLoading(false);
              setName({ ...name, field: '' });
              setLastname({ ...lastName, field: '' });
              setEmail({ ...email, field: '' });
              setPhone({ ...phone, field: '' });
              setPass({ ...pass, field: '' });
              setPass2({ ...pass2, field: '' });
              setChangePass(false);
              setMessage({
                field: 'Cambios guardados con éxito',
                valid: true,
                color: '#01c733',
              });
              localStorage.setItem(
                'user',
                JSON.stringify({
                  access_token: user.access_token,
                  user: { ...res.data },
                })
              );
              setTimeout(() => window.location.reload(), 1300);
            })
            .catch((error) => {
              setLoading(false);
              return setMessage({
                field: 'Hubo un problema al solicitar los cambios',
                valid: true,
                color: '#db0000',
              });
            });
        })
        .catch((error) => {
          console.log('primer catch', { error });
          setLoading(false);
          const { statusCode } = error.response.data;
          if (statusCode == 401) {
            return setMessage({
              field: 'La contraseña es incorrecta',
              valid: true,
              color: '#db0000',
            });
          }
        });
    }
  };

  return (
    <div className="form-container">
      <form action="">
        <InputForm
          profile={true}
          id="inputContainer"
          state={name}
          setState={setName}
          label="Nombre"
          type="text"
          placeholder={user.name}
          name="name"
          regex={expresiones.nombre}
        />
        <InputForm
          profile={true}
          id="inputContainer"
          state={lastName}
          setState={setLastname}
          label="Apellido"
          type="text"
          placeholder={user.lastname}
          name="lastname"
          regex={expresiones.nombre}
        />
        <InputForm
          profile={true}
          id="inputContainer"
          state={phone}
          setState={setPhone}
          label="Teléfono"
          type="text"
          placeholder={user.phone}
          name="phone"
          regex={expresiones.telefono}
        />
        <InputForm
          profile={true}
          id="inputContainer"
          state={email}
          setState={setEmail}
          label="Dirección de correo electrónico"
          type="text"
          placeholder={user.email}
          name="email"
          regex={expresiones.correo}
        />
        <InputForm
          profile={true}
          id="inputContainer"
          state={pass}
          setState={setPass}
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          name="password"
          regex={expresiones.password}
        />
        <InputForm
          profile={true}
          id="inputContainer"
          state={pass2}
          setState={setPass2}
          label="Repetir contraseña"
          type="password"
          placeholder="Contraseña"
          name="password2"
          regex={expresiones.password}
          validatePass={validatePassword}
        />

        <div className="form-area" onClick={handleSubmit}>
          <Button text="Actualizar" className="button" />
        </div>
        <div className="form-area">
          <label htmlFor="" className="form-area_label">
            Deseo cambiar mi contraseña
          </label>
          <input type="checkbox" onChange={handleChangePass} />
        </div>
        {changePass ? (
          <InputForm
            profile={true}
            id="inputContainer"
            state={newPass}
            setState={setNewPass}
            label="Nueva Contraseña"
            type="password"
            placeholder="Contraseña"
            name="password"
            regex={expresiones.password}
          />
        ) : null}
      </form>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : null}
      {message.valid ? (
        <p style={{ color: message.color }}>{message.field}</p>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
