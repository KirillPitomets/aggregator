import React, { FC } from 'react'
// ==== Types ====
import { IInputProps } from './PhoneInput.props'
// ==== Styles ====
import clField from '../Field.module.scss'
import cn from 'classnames'
// ==== Components ====
import InputMask from 'react-input-mask'
import ErrorMessage from '../../ErrorMessage/ErrorMessage'

const Input: FC<IInputProps> = ({
	value,
	onChange,
	errorMessage,
	name,
	id,
	mask = '+380 (99) 999-99-99',
	...props
}) => {
	return (
		<label htmlFor={id}>
			{errorMessage && <ErrorMessage error={errorMessage} />}
			<InputMask
				id={id}
				mask={mask}
				placeholder={mask}
				className={clField.field}
				onChange={onChange}
				type='text'
				value={value}
				name={name}
				{...props}
			/>
		</label>
	)
}

export default Input
