import React from 'react';
import { FaPhone, FaCalendarAlt, FaHome, FaCheckCircle } from 'react-icons/fa';

function Process() {
  const steps = [
    { icon: <FaPhone size={40} className="text-primary mb-3" />, title: '1. Contáctanos', description: 'Comunícate con nosotros por teléfono o WhatsApp.' },
    { icon: <FaCalendarAlt size={40} className="text-success mb-3" />, title: '2. Agendamos tu servicio', description: 'Coordinamos la fecha y hora que mejor se adapte a ti.' },
    { icon: <FaHome size={40} className="text-info mb-3" />, title: '3. Llegamos a tu hogar', description: 'Nuestro equipo se presenta puntualmente en tu domicilio.' },
    { icon: <FaCheckCircle size={40} className="text-warning mb-3" />, title: '4. Trabajo profesional y garantizado', description: 'Realizamos el servicio con la más alta calidad y dedicación.' },
  ];

  return (
    <section id="process" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">¿Cómo trabajamos?</h2>
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
