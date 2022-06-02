import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlPrefix } from "../Settings"
import "bootstrap/dist/css/bootstrap.min.css";
import "../default.css"


const Register = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Email: username,
        Password: password,
        ConfirmPassword: confirmPassword,
      })
    };
    if (password !== confirmPassword) {
      setError("Password doesn't match");
      return;
    }
    fetch(`${urlPrefix}/User/registration`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!result || !result.token) {
          setError("Email address already exists. Go to");
          username.style = { borderRadius: "red" }
          return;
        }
        localStorage.setItem("token", result.token)
        localStorage.setItem("status", result.status)
        setError("");
        navigate("../registerInfo", { replace: true });
        // TODO: route to another url
      })
      .catch((error) => {

        console.error('Error:', error);
        // responseData = {};
      });
  };

  return (
    <section>
      <div className="mask d-flex flex-row align-items-center h-100 gradient-custom-3">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15, marginTop: "50px" }}>
                <div className="card-body p-5 card_register">
                  <h5 className="mb-2">STEP 01/03</h5>
                  <h2 className="text-uppercase mb-1">Register</h2>
                  <h4 className="mb-5">Create Your Account</h4>
                  <form onSubmit={handleSubmit}>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Email
                      </label>
                      <input className={error === "Email address already exists. Go to" ? 'validationcl form-control form-control-lg' : 'form-control form-control-lg'}
                        maxLength={50}
                        type="email"
                        id="form3Example1cg"
                        placeholder="Enter Your Email"
                        value={username}
                        onChange={(evt) => setUsername(evt.target.value)}
                      />
                           {error === "Email address already exists. Go to" ? (<p style={{ color: "red", textAlign: "left" }}>{error}<a href="../login" style={{ color: "black", }}> Login</a> page</p>) : null}
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example3cg"
                        placeholder="Enter Your Password"
                        className={error === "Password doesn't match" ? 'validationcl form-control form-control-lg' : 'form-control form-control-lg'}
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                      />
                     
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        placeholder="Confirm Password"
                        className={error === "Password doesn't match" ? 'validationcl form-control form-control-lg' : 'form-control form-control-lg'}
                        value={confirmPassword}
                        onChange={(evt) => setConfirmPassword(evt.target.value)}
                      />
                      {error === "Password doesn't match" ? (<p style={{ color: "red", textAlign: "left" }}>{error}</p>) : null}

                    </div>
                    <div className="register-warning">
                      <div>
                        <h3>Please include the following in the password</h3>
                      </div>
                      <div className="register-warning-box">
                        <div className="register-warning-text">
                          <b>a</b>
                          <p>Lowercase</p>
                        </div>
                        <div className="register-warning-text">
                          <b>A</b>
                          <p>Uppercase</p>
                        </div>
                        <div className="register-warning-text">
                          <b>123</b>
                          <p>Number</p>
                        </div>
                        <div className="register-warning-text">
                          <b>#&?</b>
                          <p>Symbol</p>
                        </div>

                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-block btn-lg gradient-custom-4"
                      >
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
};
export default Register;