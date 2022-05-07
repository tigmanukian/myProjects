import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../default.css"


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
      setError("Password don't match");
      return;
    }
    fetch("https://localhost:7049/api/User/registration", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!result || !result.token) {

			// console.log("error")
          setError("Authentication error");
          return;
        }
        localStorage.setItem("token", result.token)
        setError("");
        navigate("./registerInfo", { replace: true });
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
                    {error ? (<p style={{ color: "red", textAlign: "center" }}>{error}</p>) : null}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Email
                      </label>
                      <input
                        maxLength={50}
                        type="email"
                        id="form3Example1cg"
                        placeholder="Enter Your Email"
                        className="form-control form-control-lg"
                        value={username}
                        onChange={(evt) => setUsername(evt.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example3cg"
                        placeholder="Enter Your Password"
                        className="form-control form-control-lg"
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
                        className="form-control form-control-lg"
                        value={confirmPassword}
                        onChange={(evt) => setConfirmPassword(evt.target.value)}
                      />
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