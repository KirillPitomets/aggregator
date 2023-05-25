import React, { FC, PropsWithChildren } from 'react'
// ==== Styles ====
import cl from './Container.module.scss'

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div className={cl.container}>{children}</div>
}

export default Container
