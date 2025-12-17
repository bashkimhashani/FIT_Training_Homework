// src/LoginForm.js
import React from 'react';
import { useFormik } from 'formik';

const LoginForm = () => {
  // 1. Initialize Formik
  const formik = useFormik({
    // Initial values (like useState default value)
    initialValues: {
      email: '',
      password: '',
    },
    
    // Validation Logic (Optional but recommended)
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
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
          {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;