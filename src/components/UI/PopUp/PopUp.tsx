import { FC, PropsWithChildren, useState } from 'react'
// ==== Types ====
import { IPopUpProps } from './PopUp.props'
// ==== Styles ====
import cl from './PopUp.module.scss'
import cn from 'classnames'

const PopUp: FC<PropsWithChildren<IPopUpProps>> = ({
	isOpen,
	handleOpen,
	children,
}) => {
  
	if (!isOpen) return null

	return (
		<div
			className={cn(cl.popup, isOpen && cl.popup_active)}
			onClick={handleOpen}
		>
			<div className={cl.wrapper} onClick={e => e.stopPropagation()}>
				<div className={cl.close}>
					<button className={cl.close__btn} onClick={handleOpen}></button>
				</div>

				{children}
			</div>
		</div>
	)
}

export default PopUp
