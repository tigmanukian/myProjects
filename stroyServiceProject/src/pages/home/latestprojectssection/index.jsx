import React from 'react'
import PageSection from '../../../common/pagesection'
import PhotoGallery from '../../../common/photogalery'

import "./index.scss"

function LatestProjects(props) {
	return (
		<>
			<PageSection
				header={props.latestProjects.header}
				description={props.latestProjects.description} >
				<div className='container ss-latest-projects'>
					<PhotoGallery images={props.latestProjects.images}/>
				</div>

			</PageSection>

		</>

	)
}



export default LatestProjects 