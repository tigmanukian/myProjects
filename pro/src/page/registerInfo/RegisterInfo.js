import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css"



const RegisterInfo = () => {
    const userTypeEnum = ["", "AccountManager", "Beneficiary", "Investor"];
    const userGender = ["", "Male", "Female", "Other"];
    const navigate = useNavigate("");
    const [Gender, setGender] = useState("");
    const [UserType, setUserType] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [MiddleName, setMiddleName] = useState("");
    const [DateOfBirth, setDateOfBirth] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [UserMetadata, setUserMetadata] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: "Bearer " + localStorage.getItem("token") },
            body: JSON.stringify({
                "userTypeEnum": userTypeEnum.indexOf(UserType),
                "firstName": FirstName,
                "lastName": LastName,
                "middleName": MiddleName,
                "dateOfBirth": DateOfBirth,
                "phoneNumber": PhoneNumber,
                "gender": userGender.indexOf(Gender),
                "userMetadata": UserMetadata,
            }),
        };
        debugger;
        fetch("https://localhost:7049/api/User/userInfoRegistration", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (!result) {
                    setError("Authentication error");
                    return;
                }
                setError("");
                navigate("../success", { replace: true });
                // TODO: route to another url
            })
            .catch((error) => {
                console.error("Error:", error);
                // responseData = {};
            });
    };
    return (
        <section>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card" style={{ borderRadius: "15px", marginTop:"50px" }}>
                                <div className="card-body p-5 card_register">
                                    <h5 className="mb-2">STEP 03/03</h5>
                                    <h2 className="text-uppercase text-center mb-1">
                                        Register Info
                                    </h2>
                                    <h4 className="mb-5 text-center">Create Your Account</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-md-12 d-flex flex_wrap_text mb-4">
                                            <div className="form-group col-md-4 first_group">
                                                <label className="form-label" htmlFor="account_status">
                                                    Account Status
                                                </label>
                                                <select name="" id="" className="form-select"
                                                  required
                                                  value={UserType}
                                                  onChange={(evt) => setUserType(evt.target.value)}>
                                                <option value={0} />
                                                <option value={1}>Account Manager</option>
                                                <option value={2}>Beneficiary</option>
                                                <option value={3}>Investor</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 first_group">
                                                <label className="form-label" htmlFor="account_status">
                                                    Date of Birthday
                                                </label>
                                                <input type="date" className="form-control"                                              
                                                 value={DateOfBirth}
                                                 onChange={(evt) => setDateOfBirth(evt.target.value)}
                                                 required/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label className="form-label" htmlFor="gender">
                                                    Gender
                                                </label>
                                                <select name="" id="gender" className="form-select" 
                                                 value={Gender}
                                                 onChange={(evt) => setGender(evt.target.value)}
                                                 required>
                                                <option value={0} />
                                                <option value={1}>Male</option>
                                                <option value={2}>Female</option>
                                                <option value={3}>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12 d-flex flex_wrap_text mb-4">
                                            <div className="form-group col-md-6 first_group">
                                                <label className="form-label" htmlFor="first_name">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="first_name"
                                                    placeholder="Enter Your First Name"
                                                    value={FirstName}
                                                    onChange={(evt) => setFirstName(evt.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group col-md-6 first_group">
                                                <label className="form-label" htmlFor="phone">
                                                    Phone Number
                                                </label>
                                                <input                                                   
                                                    type="number"                                                    
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Enter Your Phone Number"
                                                    value={PhoneNumber}
                                                    onChange={(evt) => setPhoneNumber(evt.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 d-flex flex_wrap_text mb-4">
                                            <div className="form-group col-md-6 first_group">
                                                <label className="form-label" htmlFor="last_name">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="last_name"
                                                    placeholder="Enter Your Last Name"
                                                    value={LastName}
                                                    onChange={(evt) => setLastName(evt.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group col-md-6 first_group">
                                                <label className="form-label" htmlFor="middle_name">
                                                    Middle Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="middle_name"
                                                    placeholder="Enter Your Middle Name"
                                                    value={MiddleName}
                                                    onChange={(evt) => setMiddleName(evt.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 d-flex flex_wrap_text mb-4">
                                            <div className="form-group col-md-12 first_group">
                                                <label htmlFor="exampleFormControlTextarea1">
                                                    Example textarea
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows={3}
                                                    defaultValue={""}
                                                    value={UserMetadata}
                                                    onChange={(evt) => setUserMetadata(evt.target.value)}
                                                />
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
export default RegisterInfo;