import React from 'react'
import "./singup.css"

import { Grid, Paper, Avatar, Typography, TextField, Button } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import {Formik,Field,Form,ErrorMessage} from "formik"
import {FormHelperText} from "@mui/material"
import * as Yup from "yup"
function Singup() { 
    const paperSyle = { padding: "30px 20px", width: 350, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarstyle = { backgroundColor: "#1bbd7e" }
    const initialValues={
        name: "",
        email: "",
        gender:"",
        phoneNumber:"",
        password:"",
        configPassword:"",
        termsAndConditions:false
        
    }
    const validationSchema=Yup.object().shape({
        name:Yup.string().min(3,"it's too short").required("requered"),
        email:Yup.string().email("enter valid email").required("requered"),
        gender:Yup.string().oneOf(["male","femail"],"required").required("required"),
        phoneNumber:Yup.number().typeError("enter valid phone Number").required("requered"),
        password:Yup.string().min(8,"Passwor minimum length should be 8").required("requered"),
        configPassword:Yup.string().oneOf([Yup.ref("password")],"password don't match").required("requered"),
        termsAndConditions:Yup.string().oneOf(["true"],"Accept terms Conditions").required("required")
    })
    const onSubmit=(values,props)=>{
console.log(values)
console.log(props)

setTimeout(()=>{
props.resetForm()
props.setSubmitting(false)
},2000)
    }

    return (
        <Grid >
            <Paper elevation={20} style={paperSyle}>
                <Grid align="center">
                    <Avatar style={avatarstyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption">Please fill this form  to  create an acount !</Typography>

                </Grid>
             
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props)=>(
                        <Form>

                    <Field as={TextField} label="Name"  name="name"  placeholder='Enter your  Name' helperText={<ErrorMessage name="name"/>} variant="standard" fullWidth  style={{ marginBottom: "20px" }} />
                    <Field as={TextField}label="Email" name="email" placeholder='Enter your  Email' variant="standard" helperText={<ErrorMessage name="email"/>} fullWidth  style={{ marginBottom: "20px" }} />
                    <FormControl>
                        <FormLabel component="legend">Gender</FormLabel>
                        <Field as={RadioGroup}
                            aria-label="gender"
                            name="gender"
                            
                            style={{ display: "initial" }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </Field>
                    </FormControl>
                    <FormHelperText><ErrorMessage name="gender"/></FormHelperText>
                    <Field as={TextField} label="Phone Number" name="phoneNumber" type="number"  helperText={<ErrorMessage name="phoneNumber"/>} placeholder='Enter your  Phone Number' variant="standard" fullWidth  style={{ marginBottom: "20px" }} />
                    <Field as={TextField} label="Password" name="password" helperText={<ErrorMessage name="password"/>} type="password"  placeholder='Enter your  Password' variant="standard" fullWidth  style={{ marginBottom: "20px" }} />
                    <Field as={TextField} label="Confirm Password" name="configPassword" helperText={<ErrorMessage name="configPassword"/>}  type="password"  placeholder='Confirm Password' variant="standard" fullWidth  style={{ marginBottom: "20px" }} />
                    <FormControlLabel
                        label="I accept the terms and conditions."
                        control={
                            <Field as={Checkbox}
                         
                                name="termsAndConditions"
                            />
                        }
                    />
                        <FormHelperText><ErrorMessage name="termsAndConditions"/></FormHelperText>
                    <Button type="submit" variant="contained" color="primary" disabled={props.isSubmitting}>{props.isSubmitting?"Loading":"sign up"}</Button>

             
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Singup