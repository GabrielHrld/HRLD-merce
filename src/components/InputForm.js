import React from 'react';

import '../styles/components/InputForm.scss'

const InputForm = ({ state, setState, label, type, placeholder, name, regex, validatePass, promo, }) => {
  const onChange = (e) =>{
    setState({...state, field: e.target.value});
    if(promo){
      setState(!state)
    }
  }
  
  

  const validateRegex = () =>{
    if(regex){
      if(regex.test(state.field)){
        setState({...state, valid: true});
      } else {
        setState({...state, valid: false});
      }
    }
    if(validatePass) validatePass() 
  }

  return (
    <div className="inputForm-container">
      <label className={state.valid == null ? 'label' : state.valid ? "label labelValid" : "label labelDanger"} htmlFor={name}>{label}</label>
      <input
        className={state.valid == null ? 'input' : state.valid ? "input valid" : "input danger"}
        type={type}
        placeholder={placeholder}
        name={name}
        valid={state.valid}
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
