import React from 'react';
import Founder from '../../assets/images/founder.jpg'

const PhotoCard = ({ image, name, role }) => {
  return (
    <div>
      <div className="bg-white p-2 rounded-lg shadow-lg w-full hover:shadow-xl transition-shadow duration-300">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="mt-1 text-left">
        <h3 className="text-xl font-medium text-white">{name}</h3>
        <p className="text-white text-sm mt-1">{role}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: Founder 
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: Founder 
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: Founder 
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: Founder 
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: Founder 
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: Founder 
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: Founder 
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: Founder 
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: Founder 
    }
  ];

  return (
    <div className="py-16 mt-28 bg-black text-white rounded-lg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <PhotoCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
