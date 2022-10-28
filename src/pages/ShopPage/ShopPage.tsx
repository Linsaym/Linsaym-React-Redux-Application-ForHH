import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import cn from "./ShopPage.module.scss";
import { Link } from 'react-router-dom';
import ProductBlock from '../../components/productBlock/productBlock';
import Cart from '../../components/cart/cart';
import BackLink from '../../components/backLink/backLink';

function ShopPage() {
	const productList = useSelector((state: RootState) => state.shop.productList)
	const CartRef = useRef(null)
	return (
		<>
			<BackLink />
			<div className="container">
				<h6 className={cn['page-title']}>Интернет-магазин</h6>
				<div className={cn["product-blocks"]}>
					{productList.map(e => <ProductBlock cart={CartRef} product={e} key={e.id} />)}
				</div>
				<div ref={CartRef}>
					<Cart />
				</div>
			</div>
		</>
	)
}

export default ShopPage