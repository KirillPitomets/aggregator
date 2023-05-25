import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
// ==== Types ====
import { ITextareaProps } from './Textarea.props'
import { IFieldProps } from '../Field.props'
// ==== Styles ====
import cl from './Textarea.module.scss'
import clField from '../Field.module.scss'
import cn from 'classnames'
// ==== Components ====
import ErrorMessage from '../../ErrorMessage/ErrorMessage'

const Textarea: FC<ITextareaProps> = ({ maxSymbols, className, errorMessage, onChange, ...props }) => {
  const [isLimit, setIsLimit] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [symbols, setSymbols] = useState(0)

  const handleLimit = (valueLength: number) => {
    if (valueLength >= maxSymbols) {
      setIsLimit(true)
    } else {
      setIsLimit(false)
    }
    setSymbols(valueLength)
  }

  const handleFocus = () => {
    setIsFocus((prev) => !prev)
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleLimit(e.target.value.length)
    onChange && onChange(e)
  }

  return (
    <div className={cn(cl.textarea, className)}>
      {errorMessage && <ErrorMessage error={errorMessage} />}

      <span className={cn(clField.info, isFocus && clField.info_focused, isLimit && clField.error)}>
        Введено символов {symbols} / {maxSymbols}
      </span>
      <textarea
        className={cn(clField.field, errorMessage && clField.field_error)}
        onFocus={handleFocus}
        onBlur={handleFocus}
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}

export default Textarea
