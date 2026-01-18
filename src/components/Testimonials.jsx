import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "Excellent service, they left my house impeccable and took great care of my dog. Highly recommended!",
      author: "Ana Perez",
      city: "Madrid"
    },
    {
      quote: "My cat is very special and is always nervous with new people, but with them he was calm and well cared for. The house cleaning was also perfect.",
      author: "Carlos Gomez",
      city: "Barcelona"
    },
    {
      quote: "I needed an urgent deep cleaning and they adapted to my schedule. Professional and efficient. My house shines!",
      author: "Laura Fernandez",
      city: "Valencia"
    },
    {
        quote: "We left our puppy during the trip and they sent us daily photos. It gave us a lot of peace of mind. The cleaning service was also impeccable before returning.",
        author: "Marta and Pablo Sanchez",
        city: "Sevilla"
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Testimonials</h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm p-3">
                <div className="card-body d-flex flex-column">
                  <p className="card-text flex-grow-1">"{testimonial.quote}"</p>
                  <footer className="blockquote-footer mt-auto">
                    {testimonial.author} in <cite title="City">{testimonial.city}</cite>
                  </footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
