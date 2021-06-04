import React from 'react';

import '../styles/components/InputCheckout.scss';

const InputCheckout = ({
  state,
  setState,
  label,
  type,
  placeholder,
  name,
  regex,
  validatePass,
}) => {
  const onChange = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const validateRegex = () => {
    if (regex) {
      if (regex.test(state.field)) {
        setState({ ...state, valid: true });
      } else {
        setState({ ...state, valid: false });
      }
    }
    if (validatePass) validatePass();
  };
  return (
    <p>
      <label
        className={
          state.valid == null
            ? 'label'
            : state.valid
            ? 'label labelValid'
            : 'label labelDanger'
        }
        htmlFor={name}
      >
        {label}
      </label>
      <span>
        <input
          className={
            state.valid == null
              ? 'input'
              : state.valid
              ? 'input valid'
              : 'input danger'
          }
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onKeyUp={validateRegex}
          onBlur={validateRegex}
          name={name}
          value={state.field}
          id={name}
        />
      </span>
    </p>
  );
};

export default InputCheckout;
