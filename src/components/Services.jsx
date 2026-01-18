import React from 'react';
import { FaSoap, FaHome, FaBuilding, FaToiletPaper, FaHardHat, FaBriefcase, FaDog, FaCat, FaWalking, FaPaw, FaShower, FaPlane } from 'react-icons/fa'; // Example icons

function Services() {
  const cleaningServices = [
    { name: 'House cleaning', icon: <FaHome size={30} />, description: 'Complete cleaning service for your home.' },
    { name: 'Apartment cleaning', icon: <FaBuilding size={30} />, description: 'We keep your apartment impeccable.' },
    { name: 'Deep cleaning', icon: <FaSoap size={30} />, description: 'We remove the most ingrained dirt.' },
    { name: 'Post-construction cleaning', icon: <FaHardHat size={30} />, description: 'We leave your space ready to inhabit after renovations.' },
    { name: 'Small office cleaning', icon: <FaBriefcase size={30} />, description: 'Clean and productive work environments.' },
  ];

  const petCareServices = [
    { name: 'Dog walking', icon: <FaWalking size={30} />, description: 'Safe and fun walks for your best friend.' },
    { name: 'Pet care at home', icon: <FaHome size={30} />, description: 'Your pet cared for in the comfort of your home.' },
    { name: 'Daily visits to feed', icon: <FaPaw size={30} />, description: "We make sure they don't lack anything." },
    { name: 'Basic bath and grooming', icon: <FaShower size={30} />, description: 'We keep your pet clean and happy.' },
    { name: 'Care while the owner travels', icon: <FaPlane size={30} />, description: "Total peace of mind when you're away." },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>

        {/* Cleaning Services */}
        <h3 className="text-center mb-4">🧹 Cleaning Services</h3>
        <div className="row g-4 mb-5">
          {cleaningServices.map((service, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <div className="mb-3 text-primary">{service.icon}</div>
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                  <button className="btn btn-outline-primary mt-3">Request</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pet Care Services */}
        <h3 className="text-center mb-4">🐶 Pet Care</h3>
        <p className="text-center lead mb-4">
          We take care of your pet while you work or travel. Love, safety and attention guaranteed.
        </p>
        <div className="row g-4 justify-content-center">
          {petCareServices.map((service, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <div className="mb-3 text-success">{service.icon}</div>
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                  <button className="btn btn-outline-success mt-3">Request</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
