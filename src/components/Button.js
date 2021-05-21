import React from 'react'

import '../styles/components/Button.scss'
const Button = ({text, type}) => {
  return (
    <button 
      className="button"
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
