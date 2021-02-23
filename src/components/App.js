import React from 'react'
import Signup from "./Signup"
import {Container} from 'react-bootstrap'
import {AuthProvider} from '../context/AuthContext'

import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Dashboard from "./Dashboard"
import Login from "./Login"  
import PrivateRoute from './PrivateRoute'
import Forgotpassword from './ForgotPassword'
import UpdateProfile from './Profile'

 


function App() {
  return  (

    
  <Container className = "d-flex align-items-center justify-content-center"  
   style = {{minHeight : "100vh"}}
  >
    <div className = "w-50" style = {{minHeight : "400px"}}>
      <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path = "/" component = {Dashboard} />
          <PrivateRoute  path = "/update-profile" component = {UpdateProfile} />
          <Route path = "/signup" component={Signup} />
          <Route path = "/login" component={Login} />
          <Route path = "/forgot-password" component={Forgotpassword} />
        </Switch>
      </AuthProvider>
      </Router>
    {/* <Signup /> */}
    </div>
  </Container>
 
  
  )
}

export default App;
