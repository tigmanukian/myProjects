import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./infoUs.css"

function InfoUs() {
  return (
	<div>
		<Container>
		<div className='info-wrap-section' >
			<div className='info-text' >
				<h1>
				Their fight is for our<br/><span> Motherland</span> <br/>Our fight is for their bright<br/> <span>Future</span>
				</h1>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
				 vulputate libero et velit interdum, ac aliquet odio 
				 mattis.Lorem ipsum dolor sit amet, consectetur adipiscing
				  elit. Nunc vulputate libero et velit interdum, ac aliquet
				   odio mattis.
				</p>
				<Button variant='warning' className=' mt-4' size="lg">
				DONATE
				</Button>
			</div>
			<div>
				<img src='images/homeImage.png' />
			</div>
		</div>
		</Container>
	</div>
  )
}

export default InfoUs