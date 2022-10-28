import React from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { openDialog, UserType } from '../../reducers/messagerReducer'
import cn from './user.module.scss'

interface props {
	user: UserType
}

function User({ user }: props) {
	const dispatch = useAppDispatch()

	return (
		<div className={cn['user']}>
			<div className={cn['avatar']}>
				<img src={user.avatar} alt="avatar" className={cn['avatar__img']} />
			</div>
			<div className={cn['text-content']}>
				<p className={cn['user__name']}>{user.first_name + ' ' + user.last_name}</p>
				<p className={cn['user__email']}>{user.email}</p>
				<button onClick={() => dispatch(openDialog(user.id))} className={cn['user__button']}>Начать общение</button>
			</div>
		</div>
	)
}

export default User