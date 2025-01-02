import React, { useEffect, useRef } from 'react';
import Founder from '../../assets/images/founder.jpg';
import CoFounder from '../../assets/images/cofounder.png';
import Heading from '../utilities/Heading';
import gsap from 'gsap';
import TeamSection from './TeamSection';

const About = () => {
  const textRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  useEffect(() => {
    gsap.set([textRef.current, firstImageRef.current, secondImageRef.current], {
      opacity: 0,
      y: 50
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1
      }
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    })
    .to(firstImageRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, "-=0.5")
    .to(secondImageRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, "-=0.5");

  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Heading 
        title="Our vision is to make work inspiring and fulfilling"
        customTitleStyle="text-orange font-primary text-5xl font-bold"
        subTitle="The photography and videography society of DTU, capturing the world one frame at a time. Explore, create, and tell your story through the lens. Join us to celebrate creativity and express yourself!"
        customSubTitleStyle="text-black mt-6 font-bodytext"
        containerStyle="text-center w-3/4 mt-4 mx-auto mb-16"
      />
    
      <div className="flex flex-col  lg:flex-row gap-16 justify-center items-center">
        <div className="lg:w-1/2 lg:pl-24 px-20" ref={textRef}>
          <div className="space-y-6 font-bodytext text-gray-800">
            <p className="leading-relaxed">
              The official photography and videography society of Delhi Technological University (DTU), is a vibrant community of storytellers who capture moments, emotions, and ideas through the lens. The society is a haven for photography enthusiasts, videographers, and visual storytellers, fostering creativity and technical skill development.
            </p>
            
            <p className="leading-relaxed">
              With regular photowalks, workshops, exhibitions, and contests, Prism provides members with hands-on experience and opportunities to showcase their talent. The society explores a wide range of photography styles, from portrait and wildlife to conceptual and street photography, while also delving into the art of cinematography and video editing.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 lg:relative lg:h-[450px] flex flex-col gap-12 lg:gap-0">
          <div 
            ref={firstImageRef}
            className="lg:absolute lg:right-0 lg:top-0 w-full lg:w-3/4"
          >
            <div className="bg-white p-1 rounded-lg shadow-lg w-full lg:w-3/4">
              <img 
                src={CoFounder}
                alt="Vani Gupta"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="mt-3 lg:absolute lg:right-24">
              <h3 className="text-lg font-light">Vaibhav Gupta</h3>
              <p className="text-gray-600 text-sm lg:pl-9">Co-Founder</p>
            </div>
          </div>

          <div 
            ref={secondImageRef}
            className="lg:absolute lg:left-0 lg:bottom-0 w-full lg:w-3/4 lg:z-10"
          >
            <div className="bg-white p-1 rounded-lg shadow-lg w-full lg:w-3/4">
              <img 
                src={Founder}
                alt="Vaibhav Gupta"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="mt-3 lg:absolute lg:right-24">
              <h3 className="text-lg font-light">Vani Gupta</h3>
              <p className="text-gray-600 text-sm lg:pl-9">Founder</p>
            </div>
          </div>
        </div>
      </div>
      <TeamSection/>
    </div>
  );
};

export default About;
