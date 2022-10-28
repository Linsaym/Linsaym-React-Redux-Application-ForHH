import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Product {
	name: string,
	price: number,
	id: number
}
export interface productInCart extends Product {
	count: number,
	totalPrice: number,
}

interface ShopProductsState {
	productList: Product[],
	productInCart: productInCart[],
	finalSum: number
}

const initialState: ShopProductsState = {
	productList: [
		{
			name: 'Ройс шкаф верхний',
			price: 5017,
			id: 1
		},
		{
			name: 'Кровать Bonnie, цвет Венге мали',
			price: 14234,
			id: 2
		},
		{
			name: 'Кухня "Лондон" модульная',
			price: 92113,
			id: 3
		},
		{
			name: 'Вешалка комбинированная',
			price: 21223,
			id: 4
		},
		{
			name: 'Коврик туристический',
			price: 540,
			id: 5
		},
		{
			name: 'Модульная детская "Миндаль"',
			price: 86200,
			id: 6
		},
	],
	productInCart: [
		{ id: 1, name: 'Ройс шкаф верхний', count: 1, price: 5017, totalPrice: 5017 },
		{ id: 2, name: 'Кровать Bonnie, цвет Венге мали', count: 1, price: 14234, totalPrice: 14234 }
	],
	finalSum: 19251
}

export const shopReducer = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		incrementProductCount: (state, action: PayloadAction<number>) => {
			function isAcceptableNumber(e: productInCart) {
				if (e.count < 30) {
					return { ...e, count: e.count + 1, totalPrice: (e.count + 1) * e.price }
				} else {
					return e
				}
			}
			state.productInCart = state.productInCart.map((e) => e.id === action.payload ? isAcceptableNumber(e) : e)
			state.finalSum = state.productInCart.reduce((summ, item) => { return summ + item.totalPrice }, 0)
		},
		decrementProductCount: (state, action: PayloadAction<number>) => {
			function isAcceptableNumber(e: productInCart) {
				if (e.count > 1) {
					return { ...e, count: e.count - 1, totalPrice: (e.count - 1) * e.price }
				} else {
					return e
				}
			}
			state.productInCart = state.productInCart.map((e) => e.id === action.payload ? isAcceptableNumber(e) : e)
			state.finalSum = state.productInCart.reduce((summ, item) => { return summ + item.totalPrice }, 0)
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.productInCart = state.productInCart.filter(item => item.id !== action.payload)
			state.finalSum = state.productInCart.reduce((summ, item) => { return summ + item.totalPrice }, 0)
		},
		AddToCart: (state, action: PayloadAction<number>) => {
			state.productList.forEach(e => e.id === action.payload ? state.productInCart.push({ ...e, count: 1, totalPrice: e.price }) : null)
			state.finalSum = state.productInCart.reduce((summ, item) => { return summ + item.totalPrice }, 0)
		},
	},
})

export const { AddToCart, incrementProductCount, decrementProductCount, removeFromCart } = shopReducer.actions

export default shopReducer.reducer