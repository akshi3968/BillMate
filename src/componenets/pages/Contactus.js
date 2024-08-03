import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contactus.css';

function ContactUs() {
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!firstName) {
      formErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!lastName) {
      formErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!phoneNumber) {
      formErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = 'Phone number is invalid (must be 10 digits)';
      isValid = false;
    }

    if (!service) {
      formErrors.service = 'Please select a service';
      isValid = false;
    }

    if (!message) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);
      console.log('Service:', service);
      console.log('Message:', message);
      
      setSuccessMessage('Your message has been sent successfully!');
      // Clear the form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setService('');
      setMessage('');
      setErrors({});
      navigate('/Home');
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="get-in-touch">
          <h2>Get in touch!</h2>
          <p>We'd love to hear from you. Our team will reach out ASAP!</p>
        </div>
        <div className="contact-info">
          <div>
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Chat with team</h3>
              <p>Speak directly to the team </p>
            </div>
          </div>
          <div>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Visit us</h3>
              <p>Visit our office HQ.</p>
              <p>No. 200 under bridge Ikeja, Lagos</p>
            </div>
          </div>
          <div>
            <i className="fas fa-phone-alt"></i>
            <div>
              <h3>Phone</h3>
              <p>Mon-Fri 8am-5pm</p>
              <p>+(234) 810-234-6789</p>
            </div>
          </div>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="right-side">
        <h1 className='heading'>CONTACT US</h1>
        <h2>Let's discuss solutions</h2>
        <p>Reach us anytime via hot@hotplus.com</p>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">
              <i className="fas fa-user"></i> First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              <i className="fas fa-user"></i> Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i> Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              <i className="fas fa-phone-alt"></i> Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>
          
          <button type="submit" className="send-message">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
