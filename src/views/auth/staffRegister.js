import React, {useEffect, useState} from "react";
import './login.css';
import {Link} from 'react-router-dom';
import {Field, Form, Formik} from "formik";
import {SignupSchema} from "../../validations";
import auth from "../../apis/modules/auth";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import categoryAPI from '../../apis/modules/topicCategory'


const ITEM_HEIGHT = 58;
const ITEM_PADDING_TOP = 6;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


export default function StaffRegister() {
    const [error, setError] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [category, setCategory] = useState([]);


    useEffect(() => {
        const getCategories = async () => {
            const respond = (await categoryAPI.getCategories()).data.data.filteredData
            console.log(respond)
            setCategory(respond)
        }
        getCategories()
    }, [])


    //get selected name to store in selectedCategory variable



    const register = async (data) => {
        try {
            setBtnLoading(true)
            const payload = {
                name: data.name,
                email: data.email,
                password: data.password, passwordConfirm: data.passwordConfirm,
                researchFileId: selectedCategory,
                role:'staff'
            }
            await auth.register(payload)
            window.location = '/login'
        } catch (e) {
            console.log(e.message)
            setError('Your email is already exists!!')
        }
        setBtnLoading(false)
    }

    const selectCategory = (event: selectedCategory) => {
        setSelectedCategory(event.target.value);
        console.log(selectedCategory)
    };
    return (
        <>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Staff Register Page</title>
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
                                            <Form autoComplete="off">
                                                <div>
                                                    <Field type="text" name="name" id="name" class="form-control"
                                                           placeholder="Name"/>
                                                    {errors.name && touched.name ?
                                                        <p id={"login-error"}
                                                           className="text-danger">{errors.name}</p> : null}
                                                </div>
                                                <FormControl fullWidth>
                                                    <InputLabel sx={{ marginTop: -1 }} id="demo-simple-select-label">Select your category</InputLabel>
                                                    <Select
                                                        size="small"
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={selectedCategory}
                                                        label="Age"
                                                        onChange={selectCategory}
                                                    >
                                                        {
                                                            category.map((element)=>{
                                                               return <MenuItem value={element._id}>{element.name}</MenuItem>
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                                <div class="mt-4">
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
                                                    {error ?
                                                        <p id={"login-error"} class="text-danger">{error}</p> : null}
                                                </div>

                                                <button disabled={btnLoading} type="submit"
                                                        class="btn btn-block login-btn mb-4">{btnLoading ? 'REGISTERING..' : 'Register'}</button>
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
                </div>
            </main>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            </body>
        </>

    )
}