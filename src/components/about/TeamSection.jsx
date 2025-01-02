import React from 'react';

const PhotoCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-2 rounded-lg shadow-lg w-full hover:shadow-xl transition-shadow duration-300">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-medium text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{role}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Shrija Aggarwal",
      role: "Writer",
      image: "/api/placeholder/400/320"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
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
