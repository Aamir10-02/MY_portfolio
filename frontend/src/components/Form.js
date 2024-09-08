import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FormStyles.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const token = document.querySelector('[name=csrfmiddlewaretoken]');
    if (token) {
      setCsrfToken(token.value);
    }
  }, []);

  const validate = () => {
    let errors = {};
    let valid = true;

    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }
    if (!formData.subject) {
      errors.subject = 'Subject is required';
      valid = false;
    }
    if (!formData.message) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };
// Inside Form component
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      const response = await axios.post('http://13.40.31.120/form', formData, {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json' // Ensure content type is set
        }
      
      });
      console.log(response.data);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
        <label>Your Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Subject</label>
        <input 
          type="text" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
        />
        {errors.subject && <p className="error">{errors.subject}</p>}

        <label>Message</label>
        <textarea 
          rows="6" 
          placeholder="Type your message here" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button className="btn" type="submit">Submit</button>
      </form>

      {showPopup && <div className="popup">Form submitted successfully!</div>}
    </div>
  );
}

export default Form;
