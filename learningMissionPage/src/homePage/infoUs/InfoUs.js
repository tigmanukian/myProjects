
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./infoUs.scss"

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
				Learning Mission is an educational nonprofit organization dedicated 
				to providing quality IT and English education to the ones affected by the
				 Artsakh war.
				</p>
				<Button variant='warning' className=' mt-4' size="lg">
				<a href="https://campaign.onearmenia.org/event/learning-mission-inaugural-gala/e400983"
                  style={{color:"white",textDecoration:"none"}} target="_blank"> DONATE</a>
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
export default InfoUs;