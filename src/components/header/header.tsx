import React from 'react'
import { Link } from 'react-router-dom';
import "./header.scss";

function Header() {
	return (
		<header className="header">
			<div className="header__btns">
				<Link to="/shop" className="btn-link">Интернет-магазин</Link>
				<Link to="/messager" className="btn-link">Мессенджер</Link>
				<a href="https://vk.com/linsaym" className="btn-link">GitHub</a>
			</div>
			<div className="header__btns"><button className="menu"></button></div>
			<div className="header__info">
				<h4 className='specialization'>Frontend React Developer</h4>
				<h1 className='full-name'>Загвоздкин Лев</h1>
				<div className="meta">
					<a href="https://vk.com/linsaym" target="_b" className="author">{ }</a>
				</div>
				<p>Сайт сделан специально, чтобы найти работу на HH.ru</p>
				<p>Я не дизайнер, поэтому не судите строго</p>
			</div>
		</header>
	)
}

export default Header