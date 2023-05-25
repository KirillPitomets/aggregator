import { TextareaHTMLAttributes } from 'react'

export interface ITextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	maxSymbols: number
	errorMessage?: string
}
