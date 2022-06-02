import React from "react";
import { Button, Container } from "react-bootstrap";

import "./courses.scss";

function Courses() {
  const coursesObj = [
    {
      url: "images/Courses1.png",
      cours: "C++ Programming language",
      text: "C++ is an essential programming language especially for embedded systems engineering.  ",
      btn: "Course Information",
      alt: "icon",
    },
    {
      url: "images/Courses2.png",
      cours: "C# Programming Language",
      text: "C# is a highly demanded language among various companies around the world.  ",
      btn: "Course Information",
      alt: "icon",
    },
    {
      url: "images/Courses3.png",
      cours: "Java Script Basics",
      text: " Javascript is a programming language which is used to develop functional websites. ",
      btn: "Course Information",
      alt: "icon",
    },
    {
      url: "images/Courses4.png",
      cours: "Auto Cad",
      text: " The program is designed for engineers and architects, individuals who construct houses and buildings.  ",
      btn: "Course Information",
      alt: "icon",
    },
    {
      url: "images/Courses5.png",
      cours: "UI/UX Basics",
      text: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. ",
      btn: "Course Information",
      alt: "icon",
    },
    {
      url: "images/Courses6.png",
      cours: "Computer Helpdesk",
      text: "Hardware Support (Helpdesk) – Students enrolled in Hardware Support program will learn about topics such as computer repair and computer support.  ",
      btn: "Course Information",
      alt: "icon",
    },
  ];
  return (
    <div>
      <Container className="Courses-pro-box  ">
        <div>
          <div>
            <h5>Courses</h5>
          </div>
          <div>
            <h1>
              Here are the courses we are currently offering to our students
            </h1>
          </div>
        </div>
      </Container>
      <Container className="Courses-pro">
        {coursesObj.map((item, index) => (
          <div className="card-item " key={index}>
            <img
              className="card-image card-img-top mb-5 "
              src={item.url}
              alt={item.alt}
            />
            <h5 className=" mb-4 "> {item.cours}</h5>
            <p className="card-text mb-4 "> {item.text}</p>
            <Button className="shadow-none " size="lg">
              {item.btn}
            </Button>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Courses;
