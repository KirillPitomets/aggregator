import { FC, PropsWithChildren } from 'react'
// ==== Types ====
import { IMetaProps } from '../Seo/Meta/Meta.props'
// ==== Components ====
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Meta from '../Seo/Meta/Meta'

const Layout: FC<PropsWithChildren<IMetaProps>> = ({
	title,
	description,
	children,
}) => {
	return (
		<Meta title={title} description={description}>
			<Header />
			{children}
			<Footer />
		</Meta>
	)
}

export default Layout
