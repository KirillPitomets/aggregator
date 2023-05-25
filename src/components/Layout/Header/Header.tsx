import React from 'react'
// ==== Styles ====
import cl from './Header.module.scss'
// ==== Types ====
import { IHeaderProps } from './Header.props'
import Container from '@/components/Container/Container'

const Header = ({}: IHeaderProps) => {
	return (
		<header>
			<Container>
				<div className={cl.header__wrapper}>
					<h1 className={cl.title}>Header</h1>
				</div>
			</Container>
		</header>
	)
}

export default Header
