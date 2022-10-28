import { configureStore } from '@reduxjs/toolkit';
import messagerReducer from '../reducers/messagerReducer';
import shopReducer from '../reducers/shopReducer';

export const store = configureStore({
	reducer: {
		shop: shopReducer,
		messager: messagerReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
