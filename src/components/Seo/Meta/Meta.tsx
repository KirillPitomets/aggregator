import { FC, PropsWithChildren } from 'react'
// ==== Utils ====
import { getPageTitle } from '@/utils/getPageTitle'
// ==== Types ====
import { IMetaProps } from './Meta.props'
// ==== Components ====
import Head from 'next/head'

const Meta: FC<PropsWithChildren<IMetaProps>> = ({
	title,
	description,
	children,
}) => {
	return (
		<>
			<Head>
				<meta charSet='utf-8'/>
				<title> {getPageTitle(title)} </title>
				{
					description ? 
					<>
					<meta name='description' content={description} />
					<meta name='og:description' content={description} />
					</> 
					:
					<meta name='robots' content='noindex, nofollow' />
				}

				<meta name='og:title' content={getPageTitle(title)}/>
				<meta name='og:type' content='website' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
		</>
	)
}

export default Meta
