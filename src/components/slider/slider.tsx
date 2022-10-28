import React from 'react'
import Carousel from 'better-react-carousel'
import SliderItem from './sliderItem/sliderItem'

const Slider = () => {
	return (
		<div className='Slider-container' style={{ margin: '100px 0px' }}>
			<Carousel cols={1} rows={1} gap={10} autoplay={3500} loop scrollSnap={true}>
				<Carousel.Item>
					<SliderItem img={1} href={'http://mils.su/'} />
				</Carousel.Item>
				<Carousel.Item>
					<SliderItem img={2} href={'https://akargo.ru/'} />
				</Carousel.Item>
				<Carousel.Item>
					<SliderItem img={3} href={'https://tk-translogistic.com/'} />
				</Carousel.Item>
				<Carousel.Item>
					<SliderItem img={4} href={'https://normakorma.ru/'} />
				</Carousel.Item>
				<Carousel.Item>
					<SliderItem img={5} href={'http://eco-svc.ru/'} />
				</Carousel.Item>
			</Carousel>
		</div>
	)
}
// autoplay={2000}

export default Slider