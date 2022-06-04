import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import auth from "../apis/modules/auth";

export default function Header() {
  const { loggedIn } = useContext(AuthContext);

  const logout = async () => {
    await auth.logout();
    localStorage.clear();
    window.location = "/login";
  };

  return (
    <div class="big-wrapper">
      <img
        src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png"
        alt=""
        class="shape"
      />

      <header>
        <img
          src="https://i.postimg.cc/qRFy6RzC/slider-left-dec.png"
          alt=""
          class="shape"
        />
        <div class="container">
          <div class="logo">
            <Link to="/">
              <img src="https://i.postimg.cc/B6N12sKm/SLIIT.png" alt="Logo" />
            </Link>
          </div>

          <div class="links d-none d-lg-block">
            <ul>
              {/*<Link to=""><li><a>Student</a></li></Link>*/}
              {/*<Link to=""><li><a>Supervisor</a></li></Link>*/}
              {/*<Link to=""><li><a>Staff</a></li></Link>*/}
              {/*<Link to="/login"><li class="btn2">Signing</li></Link>*/}
              {loggedIn === null && (
                <>
                  {/* <Link to="/login"><li><a >About us</a></li></Link> */}
                  <Link to="/register">
                    <li class="btn2">Sign up</li>
                  </Link>
                  <Link to="/login">
                    <li class="btn2">Sign in</li>
                  </Link>
                </>
              )}

              {loggedIn !== null && loggedIn.role === "student" && (
                <>
                  <Link to="/student/groupregister">
                    <li>
                      <a>Group Register</a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li class="btn2" onClick={logout}>
                      Logout
                    </li>
                  </Link>
                </>
              )}
              {loggedIn !== null && loggedIn.role === "admin" && (
                <>
                  <Link to="/admin/home">
                    <li>
                      <a>Admin Dashboard</a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li class="btn2" onClick={logout}>
                      Logout
                    </li>
                  </Link>
                </>
              )}
              {loggedIn !== null && loggedIn.role === "supervisor" && (
                <>
                  <Link to="/supervisor/home">
                    <li>
                      <a>Supervisor Dashboard</a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li class="btn2" onClick={logout}>
                      Logout
                    </li>
                  </Link>
                </>
              )}
              {loggedIn !== null && loggedIn.role === "Co-supervisor" && (
                <>
                  <Link to="/cosupervisor/home">
                    <li>
                      <a>Co-supervisor Dashboard</a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li class="btn2" onClick={logout}>
                      Logout
                    </li>
                  </Link>
                </>
              )}
              {loggedIn !== null && loggedIn.role === "Panel-Member" && (
                <>
                  <Link to="/panelmember/home">
                    <li>
                      <a>Panel Member Dashboard</a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li class="btn2" onClick={logout}>
                      Logout
                    </li>
                  </Link>
                </>
              )}
              {loggedIn !== null && loggedIn.role === "staff" && (
                <>
                  <Link to="/student/staffwaiting">
                    <li>
                      <a>Get a Role</a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li class="btn2" onClick={logout}>
                      Logout
                    </li>
                  </Link>
                </>
              )}
              {/* <Link to="/studenthome"><li><a>Student</a></li></Link>
                  <Link to=""><li><a>Supervisor</a></li></Link>
                  <Link to=""><li><a>Staff</a></li></Link>
                  <Link to="/login"><li class="btn2">Signin</li></Link> */}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
