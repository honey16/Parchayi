import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-white text-black h-[25vh] sm:h-[30vh] flex items-start">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 xl:px-48">
        {/* Left Section - Title */}
        <div className="flex items-start">
          <h1 className="text-4xl sm:text-4xl lg:text-6xl font-primary">
            About
          </h1>
        </div>

        {/* Right Section - Content */}
        <div className="flex items-start">
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            The official photography and videography society of Delhi
            Technological University (DTU), is a vibrant community of
            storytellers who capture moments, emotions, and ideas through the
            lens. The society is a haven for photography enthusiasts,
            videographers, and visual storytellers, fostering creativity and
            technical skill development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

