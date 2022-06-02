import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./aboutUs.scss";

function AboutUs() {
  return (
    <div>
      <Container>
        <section className="AboutUs-pro">
          <div className="AboutUs-title">
            <p>About Us</p>
          </div>
          <div>
            <h1>Testimonials from Our Students</h1>
          </div>
          <div className="AboutUs-video-box">
            <div>
              <div className="vidio-slady">
                <ReactPlayer  className="a" url="https://www.youtube.com/watch?v=xTCwo1eN82s" />
              </div>
            </div>
            <div className="vidio-text">
              <div className="vidio-slady-text">
                <p>
                  Learning Mission was founded immediately after the end of the
                  2020 Artsakh War and is an educational nonprofit organization
                  dedicated to providing quality English and technical education
                  to disadvantaged social groups, including veterans of the 2020
                  Artsakh War. Learning Mission provides powerful laptops in
                  order to optimize the remote learning experience and pays
                  students a monthly stipend to cover internet costs and allow
                  them to set aside time for their education. After completing
                  this trial phase and passing an exam, beneficiaries will then
                  begin more rigorous training intended to prepare them for
                  employment in IT fields and their stipends will be increased.
                  Once they have completed this course with sufficient marks,
                  Learning Mission will provide them with a certificate of
                  completion and advocate for their employment at top IT
                  companies. Among all mentioned above, Learning Mission builds
                  a community of like-minded people to strengthen our education!
                </p>
              </div>
            </div>
          </div>
          <div className="vidio-btn">
            <button>Read More</button>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default AboutUs;
