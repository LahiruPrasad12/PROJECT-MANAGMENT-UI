import LandingPage from "./landing_page/landingPage"
import { BrowserRouter as Router, Route } from "react-router-dom"
import React from "react"

function App() {
  return (
    <Router>
      <div>
        <LandingPage/>
      </div>
      
    </Router>
  )
}

export default App;
