import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import MessagerPage from './pages/MessagerPage/MessagerPage';
import ShopPage from './pages/ShopPage/ShopPage';


const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <h1>Erorr page</h1>,
	},
	{
		path: "/shop",
		element: <ShopPage />,
	},
	{
		path: "/messager",
		element: <MessagerPage />,
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
