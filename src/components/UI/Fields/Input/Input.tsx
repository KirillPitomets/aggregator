import React, { FC } from 'react'
// ==== Types ====
import { IInputProps } from './Input.props'
import { IFieldProps } from '../Field.props'
// ==== Styles ====
import cl from './Input.module.scss'
import clField from '../Field.module.scss'
import cn from 'classnames'
// ==== Components ====
import ErrorMessage from '../../ErrorMessage/ErrorMessage'

const Input: FC<IInputProps & IFieldProps> = ({ id, reactHookRegister, errorMessage, ...props }) => {
  return (
    <label className={cl.label} htmlFor={id}>
      {errorMessage && <ErrorMessage error={errorMessage} />}
      <input
        id={id}
        className={cn(clField.field, errorMessage && clField.field_error)}
        {...reactHookRegister}
        {...props}
      />
    </label>
  )
}

export default Input
