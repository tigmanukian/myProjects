import React, { Component, Suspense } from 'react'
import { Route, Routes,  BrowserRouter as UserRouter } from 'react-router-dom'
import withAuth from './withAuth'
import Dashboard from "./dashboard/Dashboard"




const Login = React.lazy(() => import('./login/Login'))
const Success = React.lazy(() => import('./success/Success'))
const Register = React.lazy(() => import('./register/Register'))
const RegisterInfo = React.lazy(() => import('./registerInfo/RegisterInfo'))
const Home = React.lazy(() => import('./home/Home'))
const VerifyEmail = React.lazy(() => import('./verifyEmail/VerifyEmail'))


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class App extends Component {
  render() {
    return (
      <UserRouter>
        <Suspense fallback={loading}>
          <Routes>
			
            <Route exact path="/verifyEmail" name="VerifyEmail" element={<VerifyEmail/>} />
            <Route exact path="/login" name="Login Page" element={<Login />} />            
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/" name="Home" element={<Home />} />
			<Route path="/dashboard"  element={<Dashboard/>} />
            {/* <Route path="/dashboard"  element={withAuth (<Dashboard/>,<Login/>)} /> */}
            <Route path="/registerInfo"  element={ (<RegisterInfo/>) }/>
            <Route path="/success"  element={withAuth (<Success/>,<RegisterInfo/>)} />
          </Routes>
        </Suspense>
      </UserRouter>
    )
  }
}

export default App