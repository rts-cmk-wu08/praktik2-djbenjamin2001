"use client"
import MeglerId from '@/app/meglere/[meglereId]/page';
import {Formik,Field, Form, ErrorMessage} from 'formik';
import { Schema } from './formSchema';
const FormikForm = () => {

    return ( <div className='flex flex-col'>
        
        <Formik  initialValues={{
            name:"",
            email:"",
            emne:"",
        }} validationSchema={Schema}
         onSubmit={(values, {resetForm}) => {
            //axiospost here....
            console.log(values)
            resetForm()
        }} >

           
                  <Form className='space-y-5 '>
                    
                <div className="flex-col  space-x-5 ">
                    <Field className="border border-black h-[3rem]"  placeholder="skriv din navn her" type="text" name="name" id="name"  />
                
                    <ErrorMessage name="name"/>
          
          
                    <Field className="border border-black h-[3rem]" placeholder="skriv din email her" type="email" name="email" id="email" />
                    <ErrorMessage name="email"/>
                </div>
                <div>
                <Field className=" border border-black h-[3rem] w-[29rem]" placeholder="skriv din email her" type="text" name="emne" id="emne" />
                    <ErrorMessage name="emne"/></div>
                    <div>
                    <Field className=" border border-black w-[29rem]  h-[15rem]" as="textarea" placeholder="skriv din email her" type="text" name="textarea" id="textarea" />
                    </div>
                <button type='submit'>Send</button>
            </Form>   
    
       
        </Formik>
    </div> );
}
 
export default FormikForm;