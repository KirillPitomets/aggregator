import React, { FC } from 'react'
// ==== Utils ====
import { exhaustiveCheck } from '@/utils/exhaustiveCheck'
// ==== Types ====
import { IButtonProps } from './Button.props'
// ==== Styles ====
import cl from './Button.module.scss'
import cn from 'classnames'

const Button: FC<IButtonProps> = ({
	btnStyleType,
	text,
	arrowIcon,
	className,
	...props
}) => {
	switch (btnStyleType) {
		case 'link':
			return (
				<button className={cn(cl.btn, cl['btn-link'], className)} {...props}>
					<span className={cl.text}>{text}</span>
				</button>
			)
		case 'outline':
			return (
				<button className={cn(cl.btn, cl[`btn-outline`], className)} {...props}>
					<div className={cl['btn-outline__wrapper']}>
						<span className={cl.text}>{text}</span>
						{arrowIcon && <div className={cl.arrow}></div>}
					</div>
				</button>
			)
		default:
			exhaustiveCheck(btnStyleType, 'в компоненте Button')
			return null
	}
}

export default Button
