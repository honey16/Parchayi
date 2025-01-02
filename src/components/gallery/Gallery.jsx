import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useQuery } from "@tanstack/react-query";
import { arrayMove } from "@dnd-kit/sortable";
import axios from "axios";
import Pagination from "../utilities/Pagination/Pagination.jsx";
import Heading from "../utilities/Heading.jsx";
import SortableGallery from "../SortableGallery/SortableGallery.jsx";

const UNSPLASH_ACCESS_KEY = "r44OcdTVIj6wgDTdHRXB3nW-kfWDYxT6Y1f__CYhzME";
const PHOTOS_PER_PAGE = 15;

const PhotoAlbumGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedPhotos, setSortedPhotos] = useState([]);

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
        key: photo.id, // Add a unique key for each photo
      }));

      // Update sortedPhotos when new data arrives
      setSortedPhotos(photos);

      return {
        photos,
        totalPhotos,
      };
    },
    retry: 1,
  });

  // Handle photo reordering
  const handleMovePhoto = (oldIndex, newIndex) => {
    setSortedPhotos((prevPhotos) => arrayMove(prevPhotos, oldIndex, newIndex));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        Error loading photos: {error.message}
      </div>
    );
  }

  if (!data || data.photos.length === 0) {
    return <div className="text-center py-8">No photos found</div>;
  }

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
        <SortableGallery
          gallery={RowsPhotoAlbum}
          spacing={16}
          padding={10}
          photos={sortedPhotos}
          movePhoto={handleMovePhoto}
        />

        <div className="mt-8">
          <Pagination
            totalPosts={data.totalPhotos}
            postsPerPage={PHOTOS_PER_PAGE}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            activeColor="orange"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbumGallery;
