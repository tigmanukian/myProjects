import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
// import { TiMessages  } from "react-icons/ti";
import { BiBook ,BiMessageRounded} from "react-icons/bi";
import { MdWindow, MdOutlineSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsBell, BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import "./dashboard.scss";
import { Link } from "react-router-dom";

function Dashboard() {
  const [isPopupOpen, setisPopupOpen] = useState(true);

  const burgerHandler = (e) => {
    e.preventDefault();
    setisPopupOpen(!isPopupOpen);
  };
  return (
    <div className="landing-pro">
      <div className="landing">
        <div
          className={`left-box  ${isPopupOpen ? "" : "burger-open"} `}
        >
          <LeftBox isOpen={isPopupOpen} burger={burgerHandler} />
        </div>
        <div className="right-box">
          <RightBox burger={burgerHandler} />
        </div>
      </div>
    </div>
  );
}

function LeftBox({ isOpen, burger }) {
  return (
    <>
     
        <div>
         

          <div className="burger-cloes" onClick={burger}>
            <div>X</div>
          </div>
		  <div className="logo-left-box">
              <img src="icons/logo.png"  alt=""/>
            </div>


          <div className="selection">
			  {/* <div className="selection-box register-men">
			  <BsPersonCircle />
			  <p> Name Surname</p>
			  </div> */}
            <div className="selection-box">
              <MdWindow />
              <span>Home</span>
            </div>
            <div className="selection-box">
              <BiBook />
			  
              <span>Classes</span>
            </div>
            <div className="selection-box">
              <BiCalendar />
              <span>Schedule</span>
            </div>
            <div className="selection-box">
              <BiMessageRounded />
              <span>Messages</span>
            </div>
          </div>
          <div className="settings">
            <div className="settings-box">
              <MdOutlineSettings />
              <span>Settings</span>
            </div>
            <div className="settings-box">
              <RiLogoutCircleRLine />
              <span>
                <Link
                  to="/"
                  style={{ color: "orange", textDecoration: "none" }}
                >
                  Log Out
                </Link>
              </span>
            </div>
          </div>
        </div>
     
    </>
  );
}

function RightBox({ burger }) {
  const teamObj = [
    {
      url: "images/Mher.jpg",
      name: "Mher Lalazaryan",
      professional: "Project Lead and main contributor",
    },
    {
      url: "images/Garush.jpg",
      name: "Garush Mkhitaryan",
      professional: "Developer",
    },
    {
      url: "images/Vahe.jpg",
      name: "Vahe Mkrtchyan",
      professional: "QA",
    },
    {
      url: "images/Gavril.jpg",
      name: "Gavril Alaverdyan",
      professional: "Intern",
    },
    {
      url: "images/Ani.jpg",
      name: "Ani Gasparyan",
      professional: "UX/UI designer",
    },
    {
      url: "images/Davo.jpg",
      name: "Davit Muradyan",
      professional: "Front end",
    },
    {
      url: "images/Tiko.jpg",
      name: "Tigran Manukyan",
      professional: "Front end",
    },
  ];

  const instructors = [
    {
      url: "images/Yelena.jpg",
      name: "Yelena Meroyan",
      professional: "Instructor",
    },
    {
      url: "images/Aram.jpg",
      name: "Aram Shakhbekyan",
      professional: "Instructor",
    },
    {
      url: "images/Armen.jpg",
      name: "Armen Solakhyan",
      professional: "Instructor",
    },
    {
      url: "images/Ruben.jpg",
      name: "Ruben Gargaloyan",
      professional: "Instructor",
    },
  ];

  return (
    <div>
      <header>
        <div className="top-box">
          <div>
            <h1>
              Welcome to
              <span> Learning Mission! </span>
            </h1>
          </div>
          <div className="button-head">
            <div className="burger-Phone" onClick={burger}>
              <GiHamburgerMenu />
            </div>

            <div className="logo-phone">
              <img src="icons/logo.png" alt="" />
            </div> 
            <div>
              <button>
                {" "}
                <a
                  href="https://www.paypal.com/donate?token=ElKpwNxYmwgyv9WlfYywSg8hKuKJ4Bo3WErMJJLZzz166l_rwB5spACVJkpLEX-Txp_0FJrf4MntbT0A"
                  style={{ color: "orange", textDecoration: "none" }}
                >
                  {" "}
                  DONATE
                </a>
              </button>
            </div>
            <div className="top-icons">
              <span>
                {" "}
                <BsBell />
              </span>
              <span>
                <BsPersonCircle />
              </span>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="bottom-box">
          <div className="bottom-box-text">
            <h4>
              Here we will implement the dashboard, where you will be able to
            </h4>
            <ul>
              <li>Join the variety of our classes as a student</li>
              <li>Become Learning Mission Instructor</li>
              <li>
                Become our supporter and invest into the future of our program!
              </li>
            </ul>
            <p>
              Please stay tuned for more,
              <br />
              <span>Your Learning Mission Labs team</span>
            </p>
          </div>
          <div>
            <img src="images/Group 448.png" alt="" />
          </div>
        </div>
      </header>
      <div className="team-box">
        <div className="team-wrap-box1">
          <h3>Development Team</h3>
          <div className="team-box-1">
            {teamObj.map((item, index) => (
              <div key={index} className="team-card">
                <img src={item.url} alt="" />
                <h6>{item.name}</h6>
                <span >{item.professional}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="team-wrap-box2">
          <h3 style={{ marginLeft: 50 }}>Instructors</h3>
          <div className="team-box-2">
            {instructors.map((item, index) => (
              <div key={index} className="team-card">
                <img src={item.url} alt="" />
                <h6>{item.name}</h6>
                <span >{item.professional}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
