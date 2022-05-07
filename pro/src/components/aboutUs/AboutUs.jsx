import React from "react";
import { Button, Container } from "react-bootstrap";
import "./aboutUs.css"

function AboutUs() {
  return (
    <div>
      <Container>
        <section className="AboutUs-pro">
          <div className="AboutUs-title"> 
            <p>About Us</p>
          </div>
          <div>
            <h1>Their fight is for our fight is for their bright </h1>
          </div>
          <div>
			  <div className="vidio-slady">

			  </div>
		  </div>
          <div  className="vidio-text">
			  <div className="vidio-slady-text">
			  <p>Learning Mission non-profit organization was founded after the 
				  devastating 2020 Artsakh war. During the war, our soldiers 
				  fought bravely to defend our homeland risking their lives 
				  and wellbeing. Our goal is to provide our veterans with a holistic 
				  education with IT and English at its core, as well as extra-curricular
				   lectures in Armenian studies, world history, and other disciplines. 
				   We provide students with computers and monthly financial assistance,
				    which allows them to cover certain expenses in order to concentrate 
					on the learning process.
					</p>
			  </div>
					<Button variant="warning" size="lg">
					Read More
					</Button>
		  </div>
        </section>
      </Container>
    </div>
  );
}

export default AboutUs;
