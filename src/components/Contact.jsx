import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Contact</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>Contact Information</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><FaPhone className="me-2 text-primary" /> Phone: <a href="tel:+12392229964"> +1 239 222 9964</a></li>
              <li className="mb-2"><FaWhatsapp className="me-2 text-success" /> WhatsApp: <a href="https://wa.me/12392229964" target="_blank" rel="noopener noreferrer">+1 239 222 9964</a></li>
              <li className="mb-2"><FaEnvelope className="me-2 text-info" /> Email: <a href="mailto:malemaya435@gmail.com">malemaya435@gmail.com</a></li>
              <li className="mb-2"><FaMapMarkerAlt className="me-2 text-danger" /> City or Coverage Area: Fort Myers, Florida</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h4>Send us a Message</h4>
            <form action="https://formspree.io/f/malemaya435@gmail.com" method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="service" className="form-label">Required Service</label>
                <select className="form-select" id="service" name="service">
                  <option>Select a service</option>
                  <option>House cleaning</option>
                  <option>Apartment cleaning</option>
                  <option>Pet care</option>
                  <option>Dog walking</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
