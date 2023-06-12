"use client"
import MeglerId from '@/app/meglere/[meglereId]/page';
import {Formik,Field, Form, ErrorMessage} from 'formik';
import * as yup from 'yup';


const LoginForm = () => {

    let schema = yup.object().shape({
        email:yup.string().email("write your email correctly please").required("Email is required"),
         password: yup
         .string()
         .required('Please enter your password.')
        .min(6, 'Your password is too short.').required("write your password"),
         confirmPassword: yup
         .string()
         .required('Please retype your password.')
         .oneOf([yup.ref("password")], 'Your passwords do not match.')
    })
return ( <div className='flex flex-col'>
        
        <Formik  initialValues={{
            email:"",
            password:"",
        }} validationSchema={schema}
         onSubmit={(values, {resetForm}) => {
            //axiospost here....
            console.log(values)
            resetForm()
        }} >

           
                  <Form method="post" className='space-y-5 ' >
                    
                <div className="flex-col  space-x-5 ">
                    
                    <Field className="border border-black h-[3rem]" placeholder="skriv din email her" type="email" name="email" id="email" />
                    <ErrorMessage name="email"/>
                </div>
                <div>
                <Field className=" border border-black h-[3rem] w-[29rem]" placeholder="skriv din email her" type="Password" name="password" id="emne" />
                    <ErrorMessage name="password"/></div>
                   
                <button type='submit'>Send</button>
            </Form>   
    
       
        </Formik>
    </div> );
}
 
export default LoginForm;