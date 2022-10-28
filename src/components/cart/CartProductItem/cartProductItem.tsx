import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementProductCount, decrementProductCount, removeFromCart, productInCart } from '../../../reducers/shopReducer'
import cd from './cartProductItem.module.scss'
import x from './delete.svg'
import minus from './minus.svg'
import plus from './plus.svg'


interface props { item: productInCart }


function CartProductItem({ item }: props) {
	const dispatch = useDispatch()
	return (
		<div className={cd['cart__products-item']}>
			<div className={cd['cart__product-item--text']}>
				<img src={require(`../../productBlock/images/${item.id}.png`)} className={cd['cart__products-item--img']} />
				<div className={cd['cart__product-item--name']}>{item.name}</div>
			</div>
			<div className={cd['cart__product-item--counter']}>
				<div className={cd['cart__product-item--counter-block']}>
					<button onClick={() => dispatch(decrementProductCount(item.id))} className={cd['counter-minusBtn']}><img src={minus} /></button>
					<p className={cd['counter-value']}>{item.count}</p>
					<button onClick={() => dispatch(incrementProductCount(item.id))} className={cd['counter-plusBtn']}><img src={plus} /></button>
				</div>
				<div className={cd['cart__product-item--totalPrice']}>{item.totalPrice} руб.</div>
				<button onClick={() => dispatch(removeFromCart(item.id))} className={cd['cart__product-item--deleteBtn']}><img src={x} /></button>
			</div>
		</div>
	)
}

export default CartProductItem