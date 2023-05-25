import { InputHTMLAttributes } from 'react'

export interface IInputProps extends  InputHTMLAttributes<HTMLInputElement> {
	value: string
	mask?: string
	errorMessage?: string
}