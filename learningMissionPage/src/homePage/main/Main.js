import React from 'react'
import AboutUs from '../aboutUs/AboutUs'

import StatisticsSection from '../statisticssection'

import "./main.scss"

function Main() {
  return (
	<div>
		<main>
			
			<StatisticsSection/>
			<AboutUs/>
		</main>
	</div>
  )
}

export default Main