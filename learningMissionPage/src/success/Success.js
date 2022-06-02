import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../default.css"


const Success = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate("../login", { replace: true });
  };
  return (
    <section>
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100 wrapper">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: "15px",marginTop:50 }}>
              <div className="card-body p-5 card_register">
                <h5 className="mb-3">STEP 03/03</h5>
                <div className="container container_success text-center">
                  <a href="../login" className="close"style={{color:"black"}}>x</a>
                  <img                   
                    src= "images/success.png"
                    className="img-fluid"
                    alt="success"
                  />
                </div>
                <h2 className="text-center mb-4">Success</h2>
                <p>
                  Congratulations, we have successfully created your new account!
                  Please check your mailbox for a confirmation email from us,
                  which you should receive soon. Please click the "Complete
                  Registration" link to activate your account. Thank you for
                  joining the Learning Mission family!
                </p>
                <div className="d-flex justify-content-center mb-3">
                  <button
                    type="button"
                    className="btn btn-block btn-lg gradient-custom-4"
                    onClick={handleSubmit}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  
  )
};
export default Success;