import { Link } from "react-router-dom";
import React,{useState} from "react";
import '../Styles/Signup.css'
import "../index.css"

export default function Signup() {
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
      });
    
      const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validateForm = () => {
        let valid = true;
        const errors = {};
    
        if (!formData.name) {
          valid = false;
          errors.name = 'Name is required';
        }
    
        if (!formData.email) {
          valid = false;
          errors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
          valid = false;
          errors.email = 'Invalid email format';
        }
    
        if (!formData.password) {
          valid = false;
          errors.password = 'Password is required';
        }
    
        if (!formData.phone) {
          valid = false;
          errors.phone = 'Phone number is required';
        }
    
        setFormErrors(errors);
        return valid;
      };
    
      const isValidEmail = (email) => {
        // Simple email format validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // Form is valid, you can submit the data or perform further actions here
          console.log('Form is valid, submitting data:', formData);
        } else {
          // Form is not valid, show error messages
          console.log('Form is not valid');
        }
      };
    
      return (
        <div className="whole-form">
          <form className="container" onSubmit={handleSubmit}>
          <h3 className='forgot-password1'><a href='/signin'>Sign In</a>/<a href='/signup'>SignUp</a></h3>
    
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <div className="invalid-feedback">{formErrors.name}</div>
              )}
            </div>
    
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
              <label>Phone</label>
              <input
                type="text"
                className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {formErrors.phone && (
                <div className="invalid-feedback">{formErrors.phone}</div>
              )}
            </div><br/>
    
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                <a href="/doctordashboard">Submit</a>
              </button>
            </div>
          </form>
        </div>
    )
  }