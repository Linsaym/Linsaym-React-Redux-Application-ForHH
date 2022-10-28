import React from 'react'
import CartProductItem from './CartProductItem/cartProductItem'
import cd from './cart.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'


function Cart() {
	const productInCart = useSelector((state: RootState) => state.shop.productInCart)
	const FinalSum = useSelector((state: RootState) => state.shop.finalSum)
	return (
		<div className={cd['cart']}>
			<p className={cd['cart__title']}>Корзина</p>
			<div className={'cart__products'}>
				{productInCart.length > 0 ? productInCart.map(e => <CartProductItem item={e} key={e.id} />) : <p>Корзина пуста, нажмите кнопку 'Добавить в корзину', чтобы товар появился в корзине</p>}
			</div>
			<div className={cd['finalSum']}>Итого: {FinalSum}</div>
		</div>
	)
}

export default Cart