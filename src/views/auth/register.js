import React from "react";
import './login.css';
import {Link} from 'react-router-dom';

export default function Register(){

  return(
<>
<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Register Page</title>
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
</head>  

<body style={{paddingTop: '3em'}}>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="https://i.postimg.cc/G2dDZfDw/JV-Revamping-your-website-FA-P1.gif" alt="" class="login-card-img" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
            <div class="logo">
              <img src="https://i.postimg.cc/J4ymPYYv/newl.png" alt="Logo" />
              <h3>XIOS</h3>
            </div>
              <p class="login-card-description">Signup to your account</p>
              <form action="#">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" placeholder="Enter Your Name" required/>
                  </div>
                  <div class="form-group mb-4">
                    <input type="email" name="email" class="form-control" placeholder="Enter Your Email" required/>
                  </div>
                  <div class="form-group mb-4">
                    <select type="text" name="role" class="form-control" required>
                        <option value="">--Please choose your role--</option>
                        <option value="admin">Admin</option>
                        <option value="staff">Staff</option>
                        <option value="student">Student</option>
                        <option value="supervisor">Supervisor</option>
                        <option value="co-supervisor">Co-Supervisor</option>
                        <option value="panel-member">Panel-Member</option>
                        <option value="user">User</option>
                    </select>
                  </div>
                  <div class="form-group mb-4">
                    <input type="password" name="password" class="form-control" placeholder="Enter Password" required/>
                  </div>
                  <div class="form-group mb-4">
                    <input type="password" name="passwordConfirm" class="form-control" placeholder="Re-Enter Password" required/>
                  </div>
                  <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Register" />
                </form>
                <p class="login-card-footer-text">Already have an account? <a href="/login" class="text-reset">Login here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</body>
</>

  )
}
