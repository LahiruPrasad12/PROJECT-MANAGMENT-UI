import React, {useState} from "react";
import './login.css';
import {Link} from 'react-router-dom';
import {Field, Form, Formik} from "formik";
import {SignupSchema} from "../../validations";
import auth from "../../apis/modules/auth";
import Alert from "@mui/material/Alert";
import {Snackbar} from "@mui/material";
import ErrorToast from "../../toast/error";

export default function StudentRegister() {
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);

    const register = async (data) => {
        try {
            setBtnLoading(true)
            const payload = {
                name: data.name,
                email: data.email,
                password: data.password, passwordConfirm: data.passwordConfirm
            }
            await auth.register(payload)
            window.location = '/login'
        } catch (e) {
            setError('Your email is already exists!!')
            setShowToast(true)
        }
        setBtnLoading(false)
    }

    return (
        <>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Register Page</title>
                <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet"/>
                <link rel="stylesheet"
                      href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
            </head>

            <body style={{paddingTop: '3em'}}>
            <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
                <div class="container">
                    <div class="card login-card">
                        <div class="row no-gutters">
                            <div class="col-md-5">
                                <img src="https://i.postimg.cc/G2dDZfDw/JV-Revamping-your-website-FA-P1.gif" alt=""
                                     class="login-card-img"/>
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <div class="logo">
                                        <Link to='/'><img src="https://i.postimg.cc/B6N12sKm/SLIIT.png"
                                                          alt="Logo"/></Link>
                                    </div>
                                    <p class="login-card-description">Signup to your account</p>
                                    <Link to = '/staff-register' class="btn btn-info" style={{marginBottom: '3%'}}>Staff Register</Link>
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            email: '',
                                            password: '',
                                            passwordConfirm: ''
                                        }}
                                        validationSchema={SignupSchema}
                                        onSubmit={values => {
                                            register(values)
                                        }}
                                    >
                                        {({errors, touched}) => (
                                            <Form>
                                                <div>
                                                    <Field type="text" name="name" id="name" class="form-control"
                                                           placeholder="Name"/>
                                                    {errors.name && touched.name ?
                                                        <p id={"login-error"}
                                                           className="text-danger">{errors.name}</p> : null}
                                                </div>
                                                <div>
                                                    <Field type="email" name="email" id="email" class="form-control"
                                                           placeholder="Email address"/>
                                                    {errors.email && touched.email ? <p id={"login-error"}
                                                                                        class="text-danger">{errors.email}</p> : null}
                                                </div>
                                                <div>
                                                    <Field type="password" name="password" id="password"
                                                           class="form-control" placeholder="Password"/>
                                                    {errors.password && touched.password ? <p id={"login-error"}
                                                                                              class="text-danger">{errors.password}</p> : null}
                                                </div>
                                                <div>
                                                    <Field type="password" name="passwordConfirm" id="passwordConfirm"
                                                           class="form-control"
                                                           placeholder="Confirm Password"/>
                                                    {errors.passwordConfirm && touched.passwordConfirm ?
                                                        <p id={"login-error"}
                                                           className="text-danger">{errors.passwordConfirm}</p> : null}

                                                </div>

                                                <button disabled={btnLoading} type="submit"
                                                        className="btn btn-block login-btn mb-4">{btnLoading ? 'REGISTERING..' : 'Register'}</button>
                                            </Form>
                                        )}
                                    </Formik>
                                    <p class="login-card-footer-text">Already have an account? <a href="/login"
                                                                                                  class="text-reset">Login
                                        here</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        showToast && (<>
                                <ErrorToast message={error}/>
                            </>
                        )
                    }
                </div>
            </main>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            </body>
        </>

    )
}