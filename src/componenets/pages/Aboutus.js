import React from 'react';
import './aboutus.css';
import depppic from './depp.jpg';
import qt from './qt.jpg';
import teampic from './team.jpg';
import tompic from './tompic.jpg';

const Aboutus = () => {
  return (
    <>
     

      <section className="hero">
        <div className="hero-content">
          <h2>About Us</h2>
          <p>Discover our story, mission, and values.</p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="content">
            <h2>Who We Are</h2>
            <p>We are a team of passionate professionals dedicated to delivering the best solutions for our clients. Our journey started with a vision to innovate and transform industries through cutting-edge technology and unparalleled customer service.</p>
          </div>
          <div className="image">
            <img src={teampic} alt="Our Team" />
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We thrive on creative problem-solving and continuously seek new ways to improve.</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We uphold the highest standards of integrity in all our actions.</p>
            </div>
            <div className="value-item">
              <h3>Customer Focus</h3>
              <p>Our clients are at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="member">
              <img src={depppic} alt="Johny Depp" />
              <h3>Johnny Depp</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="member">
              <img src={tompic} alt="Jane Smith" />
              <h3>Jane Smith</h3>
              <p>Chief Operating Officer</p>
            </div>
            <div className="member">
              <img src={qt} alt="Emily Johnson" />
              <h3>Emily Johnson</h3>
              <p>Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <ul className="social-media">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Aboutus;