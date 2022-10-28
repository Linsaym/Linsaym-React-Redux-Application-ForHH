import React from 'react'
import cn from './DialogWindow.module.scss'
import clsx from 'clsx';
import Message from './message/Message';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';
import { addMessege, changeInput } from '../../reducers/messagerReducer';

interface props {
	id: any
}

function DialogWindow({ id }: props) {
	const dispatch = useAppDispatch()
	const state = useAppSelector((state: RootState) => state.messager)

	let user = { id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg' }
	state.data.forEach(e => {
		if (e.id == id) { user = e }
	})

	return (
		<div className={cn["page"]}>
			<div className={cn["chat-container"]}>
				<div className={cn["user-bar"]}>
					<div className={cn["avatar"]}>
						<img src={user.avatar} alt="Avatar" />
					</div>
					<div className={cn["name"]}>
						<span>{user.first_name} {user.last_name}</span>
						<span className={cn["status"]}>online</span>
					</div>
				</div>
				<div className={cn["conversation"]}>
					<div className={cn["conversation-container"]}>
						{state.messages[user.id].map((e, id) => { return <div key={id}><Message text={e.text} type={e.type} /></div> })}
					</div>
					<form className={cn["conversation-compose"]} >

						<input className={cn["input-msg"]} name="input" value={state.input} onChange={(e) => dispatch(changeInput(e.target.value))} placeholder="Type a message" autoComplete="off" autoFocus></input>

						<button onClick={(e) => { e.preventDefault(); state.input == '' ? console.log() : dispatch(addMessege({ input: state.input, id: user.id })) }} className={cn["send"]} >
							<div className={cn["circle"]} >
								<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="send_24__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="send_24__send_24"><path id="send_24__Rectangle-76" d="M0 0h24v24H0z"></path><path d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z" id="send_24__Mask" fill="currentColor"></path></g></g></svg>
							</div >
						</button >
					</form >
				</div >
			</div >
		</div >
	)
}

export default DialogWindow