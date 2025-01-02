import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Pagination from "../utilities/Pagination/Pagination.jsx";
import Heading from "../utilities/Heading.jsx";

const UNSPLASH_ACCESS_KEY = "r44OcdTVIj6wgDTdHRXB3nW-kfWDYxT6Y1f__CYhzME";
const PHOTOS_PER_PAGE = 15;

const PhotoAlbumGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["photos", currentPage],
    queryFn: async () => {
      const response = await axios({
        method: "get",
        url: "https://api.unsplash.com/photos",
        params: {
          per_page: PHOTOS_PER_PAGE,
          page: currentPage,
          order_by: "latest",
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          "Accept-Version": "v1",
          "Content-Type": "application/json",
        },
      });

      const totalPhotos = 100;
      const photos = response.data.map((photo) => ({
        src: photo.urls.regular,
        width: photo.width,
        height: photo.height,
        alt: photo.alt_description || "Unsplash photo",
      }));

      return {
        photos,
        totalPhotos,
      };
    },
    retry: 1,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading photos</div>;
  if (!data || data.photos.length === 0) return <div>No photos found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Heading
        title="Our vision is to make work inspiring and fulfilling"
        customTitleStyle="text-orange font-primary text-5xl font-bold"
        subTitle="The photography and videography society of DTU, capturing the world one frame at a time. Explore, create, and tell your story through the lens. Join us to celebrate creativity and express yourself!"
        customSubTitleStyle="text-black mt-6 font-body text-1xl"
        containerStyle="text-center w-3/4 mt-4 mx-auto mb-16"
      />

      <div className="container mx-auto p-4">
        <PhotoAlbum
          layout="rows"
          photos={data.photos}
          targetRowHeight={250}
          spacing={10}
          
        />
        <Pagination
          totalPosts={data.totalPhotos}
          postsPerPage={PHOTOS_PER_PAGE}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          activeColor="orange"
        />
      </div>
    </div>
  );
};

export default PhotoAlbumGallery;
