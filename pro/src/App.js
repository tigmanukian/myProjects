import React, { Suspense } from "react";
import { Route, Routes,  BrowserRouter as UserRouter } from "react-router-dom";
import Home from "./page/home/Home";




const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./page/login/Login"))
const Success = React.lazy(() => import("./page/success/Success"))
const Register = React.lazy(() => import('./page/register/Register'))
const RegisterInfo = React.lazy(() => import('./page/registerInfo/RegisterInfo'))


function App() {
  return (
    <UserRouter>
        <Suspense fallback={loading}>
          <Routes>
			<Route path="/" name="home" element={<Home/>}/>
            <Route path="/login" name="Login Page" element={<Login />} />
            <Route path="/success" name="Success" element={<Success />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route path="/registerInfo" name="RegisterInfo Page" element={<RegisterInfo />} />

          </Routes>
        </Suspense>
      </UserRouter>

  );
}

export default App;
