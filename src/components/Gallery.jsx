import React from 'react';

function Gallery() {
  const images = [
    { src: "https://via.placeholder.com/400x300?text=Casa+Limpia+1", alt: "Casa Limpia 1" },
    { src: "https://via.placeholder.com/400x300?text=Mascota+Cuidada+1", alt: "Mascota Cuidada 1" },
    { src: "https://via.placeholder.com/400x300?text=Antes+Limpieza", alt: "Antes de la Limpieza" },
    { src: "https://via.placeholder.com/400x300?text=Despues+Limpieza", alt: "Después de la Limpieza" },
    { src: "https://via.placeholder.com/400x300?text=Casa+Limpia+2", alt: "Casa Limpia 2" },
    { src: "https://via.placeholder.com/400x300?text=Mascota+Cuidada+2", alt: "Mascota Cuidada 2" },
  ];

  return (
    <section id="gallery" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Galería</h2>
        <div className="row g-4">
          {images.map((image, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm h-100">
                <img src={image.src} className="card-img-top" alt={image.alt} />
                <div className="card-body">
                  <p className="card-text text-center">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
