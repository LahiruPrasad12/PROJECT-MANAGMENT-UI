import React from "react";
import './landingPagestyle.css';
import {Link} from 'react-router-dom';

export default function LandingPage(){

    return (
        <>
    <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing Page</title>
  </head>
  <body>
    <main>
      <div class="big-wrapper">
        <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

        <header>
        <img src="https://i.postimg.cc/bws7zGf5/slider-left-dec.png" alt="" class="shape" />
          <div class="container">
            <div class="logo">
              <img src="https://i.postimg.cc/J4ymPYYv/newl.png" alt="Logo" />
              <h3>XIOS</h3>
            </div>

            <div class="links">
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
                <Link to="/login"><li class="btn">Sign in</li></Link>
              </ul>
            </div>

            <div class="overlay"></div>

            <div class="hamburger-menu">
              <div class="bar"></div>
            </div>
          </div>
        </header>

        <div class="showcase-area">
          <div class="container">
            <div class="left">
              <div class="big-title">
                <h1>Welcome To Axios</h1>
                <h1>Start Exploring now.</h1>
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
              <div class="cta">
                <a href="#" class="btn">Get started</a>
              </div>
            </div>

            <div class="right">
              <img src="https://i.postimg.cc/ZYWq0Lzb/Engineering-Manager-MERN-Stack.gif" />
            </div>
              <row></row>
          </div>
        </div>

      </div> 
    </main>


    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="./app.js"></script>
  </body>
  </>
    )
}