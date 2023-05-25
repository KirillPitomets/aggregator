import React, { FC, PropsWithChildren } from 'react'
// ==== Types ====
import { ITextProps } from './Text.props'
// ==== Styles ====
import cl from './Text.module.scss'
import cn from 'classnames'

const Text: FC<PropsWithChildren<ITextProps>> = ({
	isAdditionalText = false,
	children,
}) => {
	return (
		<p className={cn(cl.text, isAdditionalText && cl.text_additional)}>
			{children}
		</p>
	)
}

export default Text
