import React, { useState } from 'react';
import lines from '../../assets/images/lines.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative bg-black text-white py-32 w-full text-roboto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-4">
          <img src={lines} alt="Decorative Lines" className="mb-4" />
          <div>
            <h2 className="text-7xl font-primary">
              <span className="text-orange">We'd love</span> to
              <br />
              hear from
              <br />
              <span>you.</span>
            </h2>
          </div>
          <p className=" max-w-md pt-6">
            Whether you're interested in booking a <br/>
            photoshoot or just want to say hello, <br/>
            feel free to drop me a message.
          </p>
        </div>

        {/* Right Section Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-700 p-2 focus:outline-none focus:border-orange text-white"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-700 p-2 focus:outline-none focus:border-orange text-white"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-700 p-2 focus:outline-none focus:border-orange text-white"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border border-gray-700 p-2 focus:outline-none focus:border-orange text-white resize-none min-h-56"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange text-black py-3 px-6 hover:bg-orange transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

