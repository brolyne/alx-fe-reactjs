import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password too short')
})

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('Registered (Formik):', values)
        alert('Registration successful (Formik)')
        resetForm()
      }}
    >
      {() => (
        <Form style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label>
            Username
            <Field name="username" />
          </label>
          <ErrorMessage name="username" component="div" style={{color: 'red'}} />

          <label>
            Email
            <Field name="email" />
          </label>
          <ErrorMessage name="email" component="div" style={{color: 'red'}} />

          <label>
            Password
            <Field name="password" type="password" />
          </label>
          <ErrorMessage name="password" component="div" style={{color: 'red'}} />

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  )
}
