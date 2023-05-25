import { ButtonHTMLAttributes } from 'react'
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	btnStyleType: 'link' | 'outline'
	text: string
	arrowIcon?: boolean
}
