import LandingPage from "./landing_page/landingPage"
import Login from "./views/auth/login"
import Register from "./views/auth/register"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react"

function App() {
  return (
    <Router>

        <LandingPage/>
        {/* <Register/> */}
        {/* Login/> */}
        {/* <Route path="/" component={LandingPage} /> */}
      
    </Router>
  )
}

export default App;
