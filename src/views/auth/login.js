import React, { useState, useEffect } from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import axios from "axios";

export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async ()=>{
   try{
     let data = {
       email,password
     }
     let respond = await axios.post('http://localhost:5000/signing',data)
     // window.location = '/home'
   }catch (e){
     alert('error')

   }
  }

  return(
<>
<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Login Page</title>
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
</head>  

<body style={{paddingTop:'3em'}}>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container" >
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="https://i.postimg.cc/HWf6NYLf/customer5-1-1.gif" alt="" class="login-card-img" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
            <div class="logo">
              <img src="https://i.postimg.cc/J4ymPYYv/newl.png" alt="Logo" />
              <h3>XIOS</h3>
            </div>
              <p class="login-card-description">Sign into your account</p>
              <form action="">
                  <div class="form-group">
                    <label form="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="Email address"
                           onChange={(e) => { setEmail(e.target.value) }}/>
                  </div>
                  <div class="form-group mb-4">
                    <label form="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="Password"
                           onChange={(e) => { setPassword(e.target.value) }}/>
                  </div>
                  <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Login" onClick={(e)=>{login()}} />
                </form>
                <a href="#" class="forgot-password-link">Forgot password?</a>
                <p class="login-card-footer-text">Don't have an account? <a href="/register" class="text-reset">Register here</a></p>
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
