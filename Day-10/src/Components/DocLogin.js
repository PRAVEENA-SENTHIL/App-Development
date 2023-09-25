import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import '../Styles/Signup.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!formData.email) {
      valid = false;
      errors.email = 'Email is required';
    }

    if (!formData.password) {
      valid = false;
      errors.password = 'Password is required';
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      console.log('Form is valid, submitting data:', formData);
    } else {
      
      console.log('Form is not valid');
    }
  };


  return (
    <div className="whole-form">
      <form className="container" onSubmit={handleSubmit}>
        <h3 className='forgot-password1'><a href='/docsignin'>Sign In</a>/<a href='/docsignup'>SignUp</a></h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <div className="invalid-feedback">{formErrors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <div className="invalid-feedback">{formErrors.password}</div>
          )}
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            <a href="/doctordashboard">Submit</a>
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="/forgot">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;