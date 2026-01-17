import React from 'react';
import { FaSoap, FaHome, FaBuilding, FaToiletPaper, FaHardHat, FaBriefcase, FaDog, FaCat, FaWalking, FaPaw, FaShower, FaPlane } from 'react-icons/fa'; // Example icons

function Services() {
  const cleaningServices = [
    { name: 'Limpieza de casas', icon: <FaHome size={30} />, description: 'Servicio completo de limpieza para tu hogar.' },
    { name: 'Limpieza de departamentos', icon: <FaBuilding size={30} />, description: 'Mantenemos tu departamento impecable.' },
    { name: 'Limpieza profunda', icon: <FaSoap size={30} />, description: 'Eliminamos la suciedad más incrustada.' },
    { name: 'Limpieza post-obra', icon: <FaHardHat size={30} />, description: 'Dejamos tu espacio listo para habitar después de reformas.' },
    { name: 'Limpieza de oficinas pequeñas', icon: <FaBriefcase size={30} />, description: 'Ambientes de trabajo limpios y productivos.' },
  ];

  const petCareServices = [
    { name: 'Paseo de perros', icon: <FaWalking size={30} />, description: 'Paseos seguros y divertidos para tu mejor amigo.' },
    { name: 'Cuidado de mascotas en casa', icon: <FaHome size={30} />, description: 'Tu mascota cuidada en la comodidad de su hogar.' },
    { name: 'Visitas diarias para alimentar', icon: <FaPaw size={30} />, description: 'Nos aseguramos de que no les falte nada.' },
    { name: 'Baño y aseo básico', icon: <FaShower size={30} />, description: 'Mantenemos a tu mascota limpia y feliz.' },
    { name: 'Cuidado mientras el dueño viaja', icon: <FaPlane size={30} />, description: 'Tranquilidad total cuando estás fuera.' },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Nuestros Servicios</h2>

        {/* Cleaning Services */}
        <h3 className="text-center mb-4">🧹 Servicios de Limpieza</h3>
        <div className="row g-4 mb-5">
          {cleaningServices.map((service, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <div className="mb-3 text-primary">{service.icon}</div>
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                  <button className="btn btn-outline-primary mt-3">Solicitar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pet Care Services */}
        <h3 className="text-center mb-4">🐶 Cuidado de Mascotas</h3>
        <p className="text-center lead mb-4">
          Cuidamos a tu mascota mientras trabajas o viajas. Amor, seguridad y atención garantizados.
        </p>
        <div className="row g-4 justify-content-center">
          {petCareServices.map((service, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <div className="mb-3 text-success">{service.icon}</div>
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                  <button className="btn btn-outline-success mt-3">Solicitar</button>
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
