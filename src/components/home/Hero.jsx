import React from 'react'
import pic from "../../assets/images/flower-pic.jpg"

const Hero = () => {
  const stats = [
    { number: "20+", label: "Events covered" },
    { number: "20+", label: "Events covered" },
  ];

  const images = [
    { src: pic, name: "Chitrakatha", year: "2024" },
    { src: pic, name: "Chitrakatha", year: "2024" },
    { src: pic, name: "Chitrakatha", year: "2024" },
  ];

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #000000 70%, #ffffff 70%, #ffffff 100%)",
        }}
      />

      {/* Content container */}
      <div className="relative flex w-full h-full">
        {/* Left section - text content */}
        <div className="w-[70%] text-white p-24 pl-32">
          <h1 className="text-6xl font-serif mb-8 leading-tight">
            Your one-stop
            <br />
            solution for
            <br />
            photography
            <br />
            needs
          </h1>

          <p className="text-gray-400 mb-10 text-lg">Lorem ipsum</p>

          <div className="flex gap-14">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-7xl font-serif text-orange">{stat.number}</div>
                <div className="text-base text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right section - images */}
        <div className="w-[30%] relative">
          <div className="absolute right-0 -left-[800px] top-[30%]">
            <div className="flex gap-14">
              {images.map((image, index) => (
                <div key={index} className="w-[400px] last:mr-[-200px]">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={`Photography ${index + 1}`}
                      className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-gray-800 text-lg font-medium">{image.name}</p>
                      <p className="text-gray-600 text-lg">{image.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


      
