import React, {FC} from 'react'
// ==== Types ====
import { IErrorMessageProps } from "./ErrorMessage.props"
// ==== Styles ====
import cl from "./ErrorMessage.module.scss"

const ErrorMessage:FC<IErrorMessageProps> = ({error}) =>{
  return (
    <p className={cl.error}>{error}</p>
  )
}

export default ErrorMessage
