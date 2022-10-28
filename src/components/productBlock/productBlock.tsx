import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, Product } from '../../reducers/shopReducer';
import { RootState } from '../../store/store';
import cn from "./productBlock.module.scss";


interface props { product: Product, cart: any }

function ProductBlock({ product, cart }: props) {
	const productInCart = useSelector((state: RootState) => state.shop.productInCart)
	const dispatch = useDispatch()
	let isInCart = false
	productInCart.forEach(e => e.id === product.id ? isInCart = true : null)
	return (
		<div className={cn["product-blocks__item"]}>
			<img className={cn["product-blocks__item-image"]} src={require(`./images/${product.id}.png`)} alt="" />
			<h6 className={cn["product-blocks__item-name"]}>{product.name}</h6>
			<div className={cn["product-blocks__item-price"]}>
				<p className={cn["product-blocks__item-old-price"]}>{product.price * 1.23}</p>
				<p className={cn["product-blocks__item-new-price"]}>{product.price} руб.</p>
			</div>
			{isInCart ? <button onClick={() => cart.current.scrollIntoView()} className={cn["product-blocks__item-goToBtn"]}>Перейти в корзину</button>
				: <button onClick={() => dispatch(AddToCart(product.id))} className={cn["product-blocks__item-buybtn"]}>Добавить в корзину</button>}
		</div>
	)
}

export default ProductBlock