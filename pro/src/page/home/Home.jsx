import React from 'react'
import Courses from '../../components/courses/Courses'
import Footer from '../../components/footer/Footer'
import Layout from '../../components/layout/Layout'
import Main from '../../components/main/Main'

function Home() {
  return (
	<div>
		<Layout/>
		<Main/>
		<Courses/>
		<Footer/>
	</div>
  )
}

export default Home