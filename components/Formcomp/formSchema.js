import * as yup from 'yup';

export const Schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    emne: yup.string().required("hendvendelse er required"),
    email:yup.string().email("write your email correctly please").required("Email is required"),
    // password: yup
    // .string()
    // .required('Please enter your password.')
    // .min(8, 'Your password is too short.').required("write your password"),
    // confirmPassword: yup
    // .string()
    // .required('Please retype your password.')
    // .oneOf([yup.ref("password")], 'Your passwords do not match.')
})

export const LoginSchema = yup.object().shape({
    email:yup.string().email("write your email correctly please").required("Email is required"),
     password: yup
     .string()
     .required('Please enter your password.')
    .min(6, 'Your password is too short.').required("write your password")
})