import React, { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import gsap from "gsap";
import "./Gallery.css";
import Pagination from "../utilities/Pagination/Pagination.jsx";

const UNSPLASH_ACCESS_KEY = "r44OcdTVIj6wgDTdHRXB3nW-kfWDYxT6Y1f__CYhzME";
const PER_PAGE = 15;

const UnsplashGallery = () => {
  const [selected, setSelected] = useState(0);
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["photos", selected],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.unsplash.com/photos?page=${selected + 1}&per_page=${PER_PAGE}`,
        {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        }
      );
      return {
        photos: response.data,
        totalPages: 10,
      };
    },
    keepPreviousData: true, 
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    timelineRef.current = gsap.timeline();
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoading && data?.photos && containerRef.current && !hasAnimatedOnce) {
      cardsRef.current = [];

      const imagePromises = Array.from(
        containerRef.current.getElementsByTagName("img")
      ).map((img) => {
        return new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
          }
        });
      });

      Promise.all(imagePromises).then(() => {
        if (timelineRef.current) {
          timelineRef.current.kill();
        }

        timelineRef.current = gsap.timeline();

        gsap.set(".masonry-item", {
          y: window.innerHeight,
          opacity: 0,
          scale: 0.8,
        });

        timelineRef.current.to(".masonry-item", {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: {
            amount: 0.8,
            grid: "auto",
          },
          ease: "power3.out",
          clearProps: "scale",
          onComplete: () => setHasAnimatedOnce(true),
        });
      });
    }
  }, [data, isLoading, hasAnimatedOnce]);

  const handleMouseEnter = (index) => {
    if (cardsRef.current[index]) {
      gsap.to(cardsRef.current[index], {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (cardsRef.current[index]) {
      gsap.to(cardsRef.current[index], {
        scale: 1,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-red-500">Error loading images</div>
    );
  }

  return (
    <div className="max-w-[90vw] mx-auto px-4" ref={containerRef}>
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {data.photos.map((photo, index) => (
          <div
            key={photo.id}
            className="masonry-item overflow-hidden"
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ 
              opacity: hasAnimatedOnce ? 1 : 0,
              borderRadius: '0.5rem',
              backgroundColor: '#fff'
            }}
          >
            <img
              src={photo.urls.regular}
              alt={photo.alt_description || "Unsplash photo"}
              className="w-full h-auto rounded-lg transition-opacity duration-300"
              style={{
                display: 'block',
                borderRadius: '0.5rem'
              }}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
      <Pagination
        totalPosts={data.totalPages * PER_PAGE}
        postsPerPage={PER_PAGE}
        setCurrentPage={setSelected}
        currentPage={selected}
      />
    </div>
  );
};

export default UnsplashGallery;
