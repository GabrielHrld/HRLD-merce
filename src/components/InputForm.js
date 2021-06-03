import React from 'react';

import '../styles/components/InputForm.scss';

const InputForm = ({
  state,
  setState,
  label,
  type,
  placeholder,
  name,
  regex,
  validatePass,
  promo,
  profile = false,
}) => {
  let containerClass = 'inputForm-container';
  let labelClass = 'label';
  let inputClass = 'input';

  if (profile) containerClass = 'inputContainer';
  if (profile) labelClass = 'labelProfile';
  if (profile) inputClass = 'inputProfile';

  const onChange = (e) => {
    setState({ ...state, field: e.target.value });
    if (promo) {
      setState(!state);
    }
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
    <div className={`${containerClass}`}>
      <label
        className={
          state.valid == null
            ? `${labelClass}`
            : state.valid
            ? `${labelClass} labelValid`
            : `${labelClass} labelDanger`
        }
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={
          state.valid == null
            ? `${inputClass}`
            : state.valid
            ? `${inputClass} valid`
            : `${inputClass} danger`
        }
        type={type}
        placeholder={placeholder}
        name={name}
        // valid={state.valid}
        onChange={onChange}
        onKeyUp={validateRegex}
        onBlur={validateRegex}
        value={state.field}
        id={name}
      />
    </div>
  );
};

export default InputForm;
