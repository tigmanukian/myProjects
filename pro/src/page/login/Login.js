import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../default.css"


const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: username,
        Password: password,
      }),
    };
    fetch("https://localhost:7049/api/User/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (!result) {
          setError("Authentication error");
          return;
        }
        setError("");
        navigate("*", { replace: true });
        // TODO: route to another url
      })
      .catch((error) => {
        console.error("Error:", error);
        // responseData = {};
      });
  };
  return (
    <section >
      <div className="mask d-flex flex-row align-items-center  h-100 gradient-custom-3" >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px", marginTop: "50px" }}>
                <div className="card-body p-5 card_register">
                  <h2 className="mb-1">Log In</h2>
                  <h4 className="mb-5 w-75">
                    Log in with your data that you entered during your
                    registration
                  </h4>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      {error ? (<p style={{ color: "red", textAlign: "center" }}>{error}</p>) : null}
                      <label className="form-label" htmlFor="form3Example1cg">
                        Email
                      </label>
                      <input
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
                    <div className="d-flex justify-content-center mb-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-lg gradient-custom-4">
                        Login
                      </button>
                    </div>
                    <div className="form-outline text-center mb-4">
                      <h3>
                        Don’t have an Account ? <a href="/register">Register now</a>
                      </h3>
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
export default Login;