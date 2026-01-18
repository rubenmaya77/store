import React from 'react';
import teamImage from '../assets/images/Tarjeta_Male.PNG';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={teamImage} alt="Our Team" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <p className="lead">
              We are a team passionate about the well-being of your home and your pets. With years of experience in cleaning and animal care services, we are dedicated to offering reliable, safe, and responsible solutions.
            </p>
            <p>
              Our mission is: <strong>"To provide reliable, safe, and responsible services for homes and pets."</strong>
            </p>
            <h4 className="mt-4">Our Values:</h4>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Responsibility</li>
              <li><i className="bi bi-heart-fill text-danger me-2"></i>Love for animals</li>
              <li><i className="bi bi-clock-fill text-info me-2"></i>Punctuality</li>
              <li><i className="bi bi-shield-fill-check text-success me-2"></i>Honesty</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
