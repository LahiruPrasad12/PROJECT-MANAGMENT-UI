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
import categoryAPI from '../../apis/modules/ropicCategory'


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
    const [selectedCategory, setSelectedCategory] = useState([]);
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
    const handleChange = (event: SelectChangeEvent<typeof selectedCategory>) => {
        const {
            target: {value},
        } = event;
        setSelectedCategory(
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    const register = async (data) => {
        try {
            setBtnLoading(true)
            const payload = {
                name: data.name,
                email: data.email,
                password: data.password, passwordConfirm: data.passwordConfirm,
                researchFileId: selectedCategory[0],
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
                                            <Form>
                                                <div>
                                                    <Field type="text" name="name" id="name" class="form-control"
                                                           placeholder="Name"/>
                                                    {errors.name && touched.name ?
                                                        <p id={"login-error"}
                                                           className="text-danger">{errors.name}</p> : null}
                                                </div>
                                                <FormControl sx={{width: 325, height: -5, marginBottom: 2}}>
                                                    <InputLabel id="demo-multiple-chip-label">Select
                                                        category</InputLabel>
                                                    <Select
                                                        labelId="demo-multiple-chip-label"
                                                        id="demo-multiple-chip"
                                                        value={selectedCategory}
                                                        onChange={handleChange}
                                                        input={<OutlinedInput label="Select category"/>}
                                                        required={true}
                                                        renderValue={(selected) => (
                                                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                                                {selected.map((value) => (
                                                                    <Chip key={value} label={value}/>
                                                                ))}
                                                            </Box>
                                                        )}
                                                        MenuProps={MenuProps}
                                                    >
                                                        {category.map((name) => (
                                                            <MenuItem
                                                                key={name._id}
                                                                value={name.name}
                                                                // style={getStyles(name, personName, theme)}
                                                            >
                                                                {name.name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
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