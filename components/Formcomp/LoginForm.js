"use client"


import MeglerId from '@/app/meglere/[meglereId]/page';
import {Formik,Field, Form, ErrorMessage} from 'formik';
import { LoginSchema } from './formSchema';
import { setCookie } from 'cookies-next';
  

const LoginForm = () => {
 
 

return ( <div className='flex flex-col'>
        
        <Formik  initialValues={{
            email:"",
            password:"",
        }} validationSchema={LoginSchema}
         onSubmit={(values, {resetForm}) => {
            fetch("https://dinmaegler.onrender.com/auth/local", {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                  "identifier": values.email,
                  "password": values.password
                })
              }) .then(response => response.json())
              .then(data => console.log(data))
              
            console.log(values.email)
            resetForm()
            setCookie("jwt", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NThhNWMyZjZiNWUwMDA0YWQ0ZGQ2MSIsImlhdCI6MTY4NjYzOTUwNCwiZXhwIjoxNjg5MjMxNTA0fQ.UTvd7TuMKHSXJ3YH057ICBF2RXEZprim94M_qyUVkj0");
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