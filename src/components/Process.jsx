import React from 'react';
import { FaPhone, FaCalendarAlt, FaHome, FaCheckCircle } from 'react-icons/fa';

function Process() {
  const steps = [
    { icon: <FaPhone size={40} className="text-primary mb-3" />, title: '1. Contact us', description: 'Contact us by phone or WhatsApp.' },
    { icon: <FaCalendarAlt size={40} className="text-success mb-3" />, title: '2. We schedule your service', description: 'We coordinate the date and time that best suits you.' },
    { icon: <FaHome size={40} className="text-info mb-3" />, title: '3. We arrive at your home', description: 'Our team arrives promptly at your home.' },
    { icon: <FaCheckCircle size={40} className="text-warning mb-3" />, title: '4. Professional and guaranteed work', description: 'We perform the service with the highest quality and dedication.' },
  ];

  return (
    <section id="process" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">How we work?</h2>
        <div className="row text-center">
          {steps.map((step, index) => (
            <div key={index} className="col-md-3">
              <div className="card shadow-sm h-100 p-4">
                {step.icon}
                <h5 className="card-title">{step.title}</h5>
                <p className="card-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
