import React from 'react';
import img from "../../assets/images/headshot.avif";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr. Singh",
      role: "Owner, Pepsi",
      image: img,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Mr. Singh",
      role: "Owner, Pepsi",
      image: img,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Mr. Singh",
      role: "Owner, Pepsi",
      image: img,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-primary mb-4">Testimonials</h2>
        <p className="text-1xl text-gray-600">Here about us from trusted sources!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative group h-[500px] overflow-hidden">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-white text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-300">{testimonial.role}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-6 text-white h-full flex items-center">
                <p>{testimonial.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="w-32 h-2 bg-orange-400"></div>
        <div className="w-32 h-2 bg-black"></div>
      </div>
    </div>
  );
};

export default Testimonials;