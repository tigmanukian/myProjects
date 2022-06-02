import React from 'react'
import IconCarusel from '../iconsCarusel/index'
import "./footer.scss"

function Footer() {
  return (
	<div>
		<IconCarusel/>
		<div className='footer-pro'>
			<h6>
			© Learning Mission Labs,  {new Date().getFullYear()}
			</h6>
		</div>
	</div>
  )
}

export default Footer