import React from 'react'
import cn from './sliderItem.module.scss'

interface props {
	img: number
	href: string
}

function SliderItem(props: props) {
	return (
		<div className={cn['Slide-container']}>
			<a href={props.href} className={cn['Slide']} target='_blank'>
				<div>
					<img alt='' src={require(`../img/${props.img}.jpg`)} className={cn['Slide__img']} />
				</div>
			</a>
		</div>
	)
}

export default SliderItem