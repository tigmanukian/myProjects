import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "./nambers.css"

function Nambers() {
  return (
	<div className='Nambers-pro'>
		<Container>
			<Row>
				<Col className='text-center'>
					<div>
						<span>115</span>
						<span className='span-laft'>+</span>
					</div>
					<div>
						<h5>
						Students
						</h5>
					</div>
				</Col>
				<Col className='text-center'>
				<div>
						<span>50</span>
						<span className='span-laft' >k</span>
					</div>
					<div>
						<h5>
						Donation
						</h5>
					</div>
				</Col>
				<Col className='text-center'>
				<div>
						<span>18</span>
						<span className='span-laft' >+</span>
					</div>
					<div>
						<h5>
						Now working students
						</h5>
					</div>
				</Col>
				<Col className='text-center'>
				<div>
						<span>10</span>
						<span className='span-laft' >+</span>
					</div>
					<div>
						<h5>
						Partners
						</h5>
					</div>
				</Col>
				
			</Row>
			<hr/>
		</Container>

	</div>
  )
}

export default Nambers