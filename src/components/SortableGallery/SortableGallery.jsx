import React, { useRef, useState, useEffect } from "react";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Sortable from "./Sortable";
import Overlay from "./Overlay";
import styles from "./SortableGallery.module.css";
import leftArrow from '../../assets/images/left.svg';
import rightArrow from '../../assets/images/right.svg';

const SortableGallery = ({ gallery: Gallery, photos: photoSet, movePhoto, render, ...rest }) => {
  const ref = useRef(null);
  const [activePhoto, setActivePhoto] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedPhoto) return;

      switch (e.key) {
        case "ArrowLeft":
          handleNavigate("prev");
          break;
        case "ArrowRight":
          handleNavigate("next");
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    const handleTouchStart = (e) => {
      if (!selectedPhoto) return;
      touchStartX.current = e.touches[0].clientX; 
    };

    const handleTouchEnd = (e) => {
      if (!selectedPhoto || touchStartX.current === null) return;

      const touchEndX = e.changedTouches[0].clientX; 
      const deltaX = touchStartX.current - touchEndX;

      const swipeThreshold = 50;

      if (deltaX > swipeThreshold) {
        handleNavigate("next");
      } else if (deltaX < -swipeThreshold) {
        handleNavigate("prev");
      }

      touchStartX.current = null; 
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [selectedPhoto]);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 100, tolerance: 10 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const photos = photoSet.map((photo) => ({ ...photo, id: photo.key ?? photo.src }));

  const handleDragStart = ({ active }) => {
    const photo = photos.find((item) => item.id === active.id);
    const image = ref.current?.querySelector(`img[src="${photo?.src}"]`);
    const padding = image?.parentElement ? getComputedStyle(image.parentElement).padding : undefined;
    const { width, height } = image?.getBoundingClientRect() || {};

    if (photo !== undefined && width !== undefined && height !== undefined) {
      setActivePhoto({ photo, width, height, padding });
    }
  };

  const getPhotoIndex = (photo) => photos.findIndex((item) => item.id === photo.id);

  const handleNavigate = (direction) => {
    const currentIndex = getPhotoIndex(selectedPhoto);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % photos.length 
      : (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[newIndex]);
  };

  const handleDragEnd = ({ active, over }) => {
    if (over && active.id !== over.id) {
      movePhoto(
        photos.findIndex((photo) => photo.id === active.id),
        photos.findIndex((photo) => photo.id === over.id)
      );
    }
    setActivePhoto(null);
  };

  const handlePhotoClick = (photo) => {
    if (!activePhoto) {
      setSelectedPhoto(photo);
    }
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const renderSortable = (Component, index, photo, props) => (
    <Sortable key={index} id={photo.id}>
      <Component {...props} onClick={() => handlePhotoClick(photo)} />
    </Sortable>
  );

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        collisionDetection={closestCenter}
      >
        <SortableContext items={photos}>
          <div className={styles.gallery}>
            <Gallery
              ref={ref}
              photos={photos}
              render={{
                ...render,
                link: (props, { index, photo }) => renderSortable("a", index, photo, props),
                wrapper: (props, { index, photo }) => renderSortable("div", index, photo, props),
                button: (props, { index, photo }) => renderSortable("button", index, photo, props),
              }}
              {...rest}
            />
          </div>
        </SortableContext>

        <DragOverlay>
          {activePhoto && <Overlay className={styles.overlay} {...activePhoto} />}
        </DragOverlay>
      </DndContext>

{selectedPhoto && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            
            <div className={styles.imageContainer}>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className={styles.modalImage}
              />
              
              <div className={styles.navigationButtons}>
                <button 
                  className={`${styles.navButton} ${styles.left}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate('prev');
                  }}
                >
                <img src={leftArrow} alt="Previous" className={styles.navIcon}/>
                </button>
                <button 
                  className={`${styles.navButton} ${styles.right}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate('next');
                  }}
                >
                  <img src={rightArrow} alt="Next" className={styles.navIcon}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SortableGallery;
