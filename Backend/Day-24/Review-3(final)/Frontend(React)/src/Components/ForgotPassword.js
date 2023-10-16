import React, { useState } from 'react';
import '../Styles/ForgotPassword.css';

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
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

    if (!formData.email) {
      valid = false;
      errors.email = 'Email is required';
    }

    if (!formData.newPassword) {
      valid = false;
      errors.newPassword = 'New Password is required';
    }

    if (formData.newPassword !== formData.confirmPassword) {
      valid = false;
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can submit the data or perform further actions here
      console.log('Form is valid, submitting data:', formData);
    } else {
      // Form is not valid, do nothing or show error messages
      console.log('Form is not valid');
    }
  };

  return (
    <div className="whole-form">
      <form className="container" onSubmit={handleSubmit}>
        <h3>Forgot Password</h3>

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
          <label>New Password</label>
          <input
            type="password"
            className={`form-control ${formErrors.newPassword ? 'is-invalid' : ''}`}
            placeholder="Enter new password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
          {formErrors.newPassword && (
            <div className="invalid-feedback">{formErrors.newPassword}</div>
          )}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className={`form-control ${formErrors.confirmPassword ? 'is-invalid' : ''}`}
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword && (
            <div className="invalid-feedback">{formErrors.confirmPassword}</div>
          )}
        </div><br/>

        <div className="form-group">
          <button type="submit" className=" btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
