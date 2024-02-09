import React from 'react'
import '../Style/Toast.css'

const Toast = ({toastText}) => {
  return (
    <p className='toast'>{toastText}</p>
  )
}

export default Toast