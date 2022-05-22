import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";

export default function Header() {
  
  return (
    <div class="big-wrapper">
      <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

      <header>
        <img src="https://i.postimg.cc/qRFy6RzC/slider-left-dec.png" alt="" class="shape" />
        <div class="container">
          <div class="logo">
            <Link to="/"><img src="https://i.postimg.cc/B6N12sKm/SLIIT.png" alt="Logo" /></Link>
          </div>

          <div class="links">
            <ul>
                  <Link to="/studenthome"><li><a>Student</a></li></Link>
                  <Link to=""><li><a>Supervisor</a></li></Link>
                  <Link to=""><li><a>Staff</a></li></Link>
                  <Link to="/login"><li class="btn2">Signin</li></Link>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}