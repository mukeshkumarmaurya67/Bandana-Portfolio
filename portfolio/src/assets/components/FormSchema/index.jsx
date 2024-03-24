import * as Yup from "yup";


export const ContactFormSchemas=Yup.object({
    fname:Yup.string().min(3).max(25).required("Name field is required !"),
    lname:Yup.string().required("Please enter your last name !"),
    email:Yup.string().email().required("Email id is required !"),
    password:Yup.string().required("Password is required !"),
    cpassword:Yup.string().required("Confirm password is required !"),
    classes:Yup.string().required("classes id is required !"),


    
})