import React from 'react'
// ==== Styles ====
import cl from './Footer.module.scss'
// ==== Types ====
import { IFooterProps } from './Footer.props'
import Container from '@/components/Container/Container'

const Footer = ({}: IFooterProps) => {
	return (
		<footer>
			<Container>
				<div className={cl.footer__wrapper}>
					<h1 className={cl.title}>Footer</h1>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
