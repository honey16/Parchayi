// import React from 'react';
// import { Link } from 'react-router-dom';
// import gp1 from '../../assets/images/gp1.jpg';
// import gp2 from '../../assets/images/gp2.jpg';
// import gp3 from '../../assets/images/gp3.jpg';
// import gp4 from '../../assets/images/gp4.jpg';

// const GalleryPreview = () => {
//   const photos = [gp1, gp2, gp3, gp4, gp2];

//   return (
//     <div className="container mx-auto px-4 py-12 mb-32">
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h2 className="text-4xl font-serif mb-2">Gallery</h2>
//           <p className="text-gray-600">Explore the variety of our projects</p>
//         </div>
//         <Link to="/gallery" className="text-4xl">→</Link>
//       </div>

//       <div className="grid grid-cols-12 gap-4 auto-rows-fr" style={{ height: '180vh' }}>
//         <div className="col-span-6 h-full">
//           <img src={photos[0]} alt="Gallery 1" className="w-full h-full object-cover rounded-lg" />
//         </div>
//         <div className="col-span-6 h-full">
//           <img src={photos[1]} alt="Gallery 2" className="w-full h-full object-cover rounded-lg" />
//         </div>
//         <div className="col-span-4 h-full">
//           <img src={photos[2]} alt="Gallery 3" className="w-full h-full object-cover rounded-lg" />
//         </div>
//         <div className="col-span-8 h-full">
//           <img src={photos[3]} alt="Gallery 4" className="w-full h-full object-cover rounded-lg" />
//         </div>
//         <div className="col-span-4 h-full">
//           <img src={photos[4]} alt="Gallery 5" className="w-full h-full object-cover rounded-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryPreview;

import React from 'react';
import { Link } from 'react-router-dom';
import gp1 from '../../assets/images/gp1.jpg';
import gp2 from '../../assets/images/gp2.jpg';
import gp3 from '../../assets/images/gp3.jpg';
import gp4 from '../../assets/images/gp4.jpg';

const GalleryPreview = () => {
  const photos = [gp1, gp2, gp3, gp4, gp2];

  return (
    <div className="container mx-auto px-10 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-6xl font-primary mb-6">Gallery</h2>
          <p className="text-gray-600 text-2xl">Explore the variety of our projects</p>
        </div>
        <Link to="/gallery" className="text-4xl">→</Link>
      </div>

      <div className="grid grid-cols-8 grid-rows-4 gap-4" style={{ height: '180vh' }}>
        <div className="col-span-5 row-span-2">
          <img src={photos[0]} alt="Gallery 1" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-3 row-span-2">
          <img src={photos[1]} alt="Gallery 2" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-2 row-span-2">
          <img src={photos[2]} alt="Gallery 3" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-4 row-span-2">
          <img src={photos[3]} alt="Gallery 4" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-2 row-span-2">
          <img src={photos[4]} alt="Gallery 5" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default GalleryPreview;