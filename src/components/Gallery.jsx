import React from 'react';
import interior1 from '../assets/images/interior1.jpg';
import interior2 from '../assets/images/interior2.jpeg';
import interior3 from '../assets/images/interio3.jpeg';
import interior4 from '../assets/images/interior4.jpg';
import interior5 from '../assets/images/interior5.jpeg';
import interior6 from '../assets/images/interio6.jpg';

function Gallery() {
  const images = [
    { src: interior1, alt: "Modern living room" },
    { src: interior2, alt: "Cozy bedroom" },
    { src: interior3, alt: "Bright kitchen" },
    { src: interior4, alt: "Stylish bathroom" },
    { src: interior5, alt: "Spacious dining area" },
    { src: interior6, alt: "Elegant hallway" },
  ];

  return (
    <section id="gallery" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Gallery</h2>
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
