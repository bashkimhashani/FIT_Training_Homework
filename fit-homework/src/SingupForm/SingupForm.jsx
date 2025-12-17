// src/LoginForm.js
import React from 'react';
import { useFormik } from 'formik';

const LoginForm = () => {
  // 1. Initialize Formik
  const formik = useFormik({
    // Initial values (like useState default value)
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      validPassword: '',
    },
    
    // Validation Logic (Optional but recommended)
    validate: (values) => {
      const errors = {};
      if(!values.username) {
        errors.username = 'Username is required'
      }else if(values.username.length < 5) {
        errors.username = "Username must be 5 charcters or more!"
      }

      if (!values.email) {
        errors.email = 'Email is required';
      }else if(!values.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        errors.email = "Not a valid email"
      }else {
        errors.email = "Correct!"
      }

      if (!values.password) {
        errors.password = 'Password is required';
      }

      if (!values.confirmPassword && values.password) {
        errors.confirmPassword = 'Confirm Password is required';
      }

      if (values.password !== values.confirmPassword) { 
        errors.validPassword = 'false';
      }

      return errors;
    },

    // What happens when the form is submitted
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      <h2>Login</h2>

      <form onSubmit={formik.handleSubmit}>

        {/* User name Field */}
        <div style={{ marginBottom: '10px' }}>
          <label>User name:</label>
          <input 
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
           />

          {/* Show error if it exists */}
          {formik.errors.username ? <div style={{color: 'red'}}>{formik.errors.username}</div> : null}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            // connect the value to formik
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {/* Show error if it exists */}
          {formik.errors.email ? (formik.errors.email == "Correct!" ? <div style={{color: 'green'}}>{formik.errors.email}</div> : <div style={{color: 'green'}}>{"Correct"}</div> ) : null}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
        </div>

        {/* Confirm Password Field */}
        <div style={{ marginBottom: '10px' }}>
          <label>confirmPassword:</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword ? <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div> : null}
        </div>

        <div>
          {formik.errors.validPassword === 'false' ? <div style={{color: 'red'}}>{"Password and Confirm Password are not the same"}</div> : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;