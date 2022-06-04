import React, { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { SigningForm } from "../../validations";
import { Field, Form, Formik } from "formik";
import auth from "../../apis/modules/auth";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorToast from "../../toast/error";

export default function Login() {
  //if user already logged in user redirect to
  useEffect(() => {});

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const login = async (data) => {
    try {
      setBtnLoading(true);
      setShowToast(false);
      let payload = {
        email: data.email,
        password: data.password,
      };
      let respond = (await auth.login(payload)).data;
      localStorage.setItem("JWT", respond.token);
      if (respond.data.user.role === "student") {
        if (respond.data.user.groupID) {
          window.location = "/student/home";
        } else {
          window.location = "/student/groupregister";
        }
      } else if (respond.data.user.role === "admin") {
        window.location = "/admin/home";
      } else if (respond.data.user.role === "Co-supervisor") {
        window.location = "/cosupervisor/home";
      } else if (respond.data.user.role === "supervisor") {
        window.location = "/supervisor/home";
      } else if (respond.data.user.role === "Panel-Member") {
        window.location = "/panelmember/home";
      } else if (respond.data.user.role === "staff") {
        window.location = "/student/staffwaiting";
      }
      
    } catch (e) {
      localStorage.clear();
      setError("Your user name or password is incorrect");
      setShowToast(true);
    }
    setBtnLoading(false);
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Login Page</title>
        <link
          href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
      </head>

      <body style={{ paddingTop: "3em" }}>
        <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
          <div class="container">
            <div class="card login-card">
              <div class="row no-gutters">
                <div class="col-md-5">
                  <img
                    src="https://i.postimg.cc/HWf6NYLf/customer5-1-1.gif"
                    alt=""
                    class="login-card-img"
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <div class="logo">
                      <Link to="/">
                        <img
                          src="https://i.postimg.cc/B6N12sKm/SLIIT.png"
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <p class="login-card-description">Sign into your account</p>
                    <Link to = '/staff-register' class="btn btn-info" style={{marginBottom: '3%'}}>Staff Register</Link>
                    <Formik
                      initialValues={{
                        email: "",
                        password: "",
                      }}
                      validationSchema={SigningForm}
                      onSubmit={(values) => {
                        login(values);
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div>
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              class="form-control"
                              placeholder="Email Address"
                            />
                            {errors.email && touched.email ? (
                              <p id={"login-error"} class="text-danger">
                                {errors.email}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <Field
                              type="password"
                              name="password"
                              id="password"
                              class="form-control"
                              placeholder="Password"
                            />
                            {errors.password && touched.password ? (
                              <p id={"login-error"} class="text-danger">
                                {errors.password}
                              </p>
                            ) : null}
                          </div>

                          <button
                            disabled={btnLoading}
                            type="submit"
                            class="btn btn-block login-btn mb-4"
                          >
                            {btnLoading ? "Loading..." : "Login"}
                          </button>
                        </Form>
                      )}
                    </Formik>
                    <p class="login-card-footer-text">
                      Don't have an account?{" "}
                      <a href="/register" class="text-reset">
                        Register here
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {showToast && (
              <>
                <ErrorToast message={error} />
              </>
            )}
          </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
      </body>
    </>
  );
}
