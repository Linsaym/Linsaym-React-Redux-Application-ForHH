import clsx from 'clsx'
import React from 'react'
import cn from './Message.module.scss'

interface props {
	text: string
	type: "sent" | "received"
}

function Message({ text, type }: props) {
	return (
		<div className={clsx(cn["message"], cn[type])}>
			{text}
		</div>
	)
}

export default Message