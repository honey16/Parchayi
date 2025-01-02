import React from "react";
import img from "../../assets/images/butterfly.jpg";

const Services = () => {
  const services = [
    {
      title: "Exciting Contest",
      text: "2 Past more emotionless this along goodness this sad wow manatee mongos",
      image: img
    },
    {
      title: "Vibrant Community",
      text: "2 Past more emotionless this along goodness this sad wow manatee mongos",
      image: img
    },
    {
      title: "Learning Opportunity",
      text: "2 Past more emotionless this along goodness this sad wow manatee mongos",
      image: img
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-6xl text-center font-primary mb-28 mx-10">
        Explore our comprehensive range of photography services
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 mx-60">
        {services.map((service, index) => (
          <div 
            key={index} 
            className=" overflow-hidden shadow-lg transition-all duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 group hover:bg-orange transition-colors duration-300 min-h-[200px]">
              <h3 className="font-primary text-2xl font-semibold mb-4 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white text-lg">
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;