import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import auth from "../apis/modules/auth";

export default function Header() {
    const { loggedIn } = useContext(AuthContext);

    const logout = async () => {
        await auth.logout();
        localStorage.clear();
        window.location = '/login'
    }
  
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
                  {/*<Link to=""><li><a>Student</a></li></Link>*/}
                  {/*<Link to=""><li><a>Supervisor</a></li></Link>*/}
                  {/*<Link to=""><li><a>Staff</a></li></Link>*/}
                  {/*<Link to="/login"><li class="btn2">Signing</li></Link>*/}
                {
                    loggedIn === null && (<>
                        {/* <Link to="/login"><li><a >About us</a></li></Link> */}
                        <Link to="/register"><li class="btn2">Sign up</li></Link>
                        <Link to="/login"><li class="btn2">Sign in</li></Link>
                    </>)
                }

                {
                    loggedIn !== null && loggedIn.role === 'student' && (<>
                        <Link to="/student/groupregister"><li><a>Group Register</a></li></Link>
                        {/*<Link to="/student/home"><li><a>Student Dashboard</a></li></Link>*/}
                        <Link to="/login"><li class="btn2" onClick={logout}>Logout</li></Link>
                    </>)
                }
                  {/* <Link to="/studenthome"><li><a>Student</a></li></Link>
                  <Link to=""><li><a>Supervisor</a></li></Link>
                  <Link to=""><li><a>Staff</a></li></Link>
                  <Link to="/login"><li class="btn2">Signin</li></Link> */}
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}