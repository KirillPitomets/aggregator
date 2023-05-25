import React, { FC, useState } from 'react'
// ==== Types ====
import { IRatingProps } from './Rating.props'
// ==== Styles ====
import cl from './Rating.module.scss'
import cn from 'classnames'

const Rating: FC<IRatingProps> = ({ stars, maxRating }) => {
	const [rating, setRating] = useState(stars)

	const handleRating = (NewRating: number) => {
		setRating(NewRating)
	}

	return (
		<ul className={cl.wrapper}>
			{[...Array(maxRating)].map((star, indx) => {
				return (
					<li
						key={indx}	
						className={cl['star-btn']}
						onClick={() => handleRating(indx + 1)}
					>
						<span
							className={cn(cl.star, indx < rating && cl.star_active)}
						></span>
					</li>
				)
			})}
		</ul>
	)
}

export default Rating
