"use client";

import MeglerId from "@/app/meglere/[meglereId]/page";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { LoginSchema } from "./formSchema";
import { setCookie } from "cookies-next";

const LoginForm = () => {
  return (
    <div className="flex flex-col">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          fetch("https://dinmaegler.onrender.com/auth/local", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              identifier: values.email,
              password: values.password,
            }),
          })
            .then((response) => {
              console.log(response);
              if (response.status === 400) {
                console.log("wrong user eller pword")
              } else {
                return response.json();
              }
            })
            .then((data) => {
              setCookie("Dogus", data.jwt);
              window.location.replace("/");
            });

          console.log(values.email);

          resetForm();
        }}
      >
        <Form action="/" method="post" className="space-y-10 p-5 text-center">
          <div className="flex-col  space-x-5 ">
            <Field
              className="border border-black h-[3rem] w-[29rem]"
              placeholder="skriv din email her"
              type="email"
              name="email"
              id="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <Field
              className=" border border-black h-[3rem] w-[29rem]"
              placeholder="skriv din password her"
              type="Password"
              name="password"
              id="password"
            />
            <ErrorMessage name="password" />
          </div>

          <button className="bg-blue text-white  h-[3rem] w-[29rem]" type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
