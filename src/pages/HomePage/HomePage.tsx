import React from 'react'
import Header from '../../components/header/header'
import "./HomePage.scss";
import comp from './comp.png'
import { Link } from 'react-router-dom';
import Slider from '../../components/slider/slider';

function HomePage() {
	return (
		<>
			<Header />
			<main className='home-page'>
				<div className="container">
					<h6 className='home-page__title'>Что находится на этом сайте?</h6>
					<div className='description'>
						<img className='description__image' src={comp} alt="" />
						<div className='description__text'>
							<p>Привет! Я создал небольшой сайт, специально чтобы найти работу на HH.ru</p>
							<br />
							<p>Слева вверху вы можете найти ссылки на</p>
							<p><ins><Link className='description__link' to="/shop">Интернет-магазин</Link></ins> и <ins><Link className='description__link' to="/messager">Мессенджер</Link></ins></p>
							<br />
							<p>Или можно кликнуть по ним прямо тут! <img className='smile' alt="☝" src="https://vk.com/emoji/e/e2989d_2x.png" /></p>
							<br />
							<p>А чуть ниже я сделал небольшой слайдер.</p>
							<p>На нём изображены некоторые проекты в которых я ранее участвовал</p>
						</div>
					</div>
					<Slider />
				</div>
			</main>
		</>
	)
}

export default HomePage