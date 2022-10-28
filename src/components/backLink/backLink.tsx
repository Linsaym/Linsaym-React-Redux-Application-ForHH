import React from 'react'
import { Link } from 'react-router-dom'
import cn from "./BackLink.module.scss";

function BackLink() {
	return (
		<Link to='/' className={cn['back-link']}><div className={cn["arrow"]}></div></Link>
	)
}

export default BackLink