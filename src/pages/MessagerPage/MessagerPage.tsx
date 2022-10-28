import React, { useEffect } from 'react'
import cn from "./MessagerPage.module.scss";
import axios from 'axios';
import BackLink from '../../components/backLink/backLink';
import { fetchUsers } from '../../reducers/messagerReducer';
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import User from '../../components/user/user';
import DialogWindow from '../../components/DialogWindow/DialogWindow';


function MassengerPage() {
	const dispatch = useAppDispatch()
	const state = useAppSelector((state: RootState) => state.messager)

	useEffect(() => {
		dispatch(fetchUsers())
	}, []);
	return (
		<>
			<BackLink />
			<main className='main'>
				<div className="container">
					<h6 className={cn['page-title']}>Мессенджер</h6>
					<div className={cn["content"]}>
						<div className="users">
							{state.data.map(user => <div key={user.id}><User user={user} /></div>)}
						</div>
						<div className={cn["dialog-window"]}>
							<DialogWindow id={state.idOpenDialog} />
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default MassengerPage