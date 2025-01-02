import React, { useRef, useState } from "react";
import {
  DndContext,
  DragOverlay,  // Added this import
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

// Import the CSS as a string to be used with the style tag
const galleryStyles = `
.gallery .react-photo-album {
  --position-indicator-width: 4px;
  --position-indicator-offset: calc(
    (var(--react-photo-album--spacing, 0) * 1px + var(--position-indicator-width)) / -2
  );
}

.overlay,
.gallery .react-photo-album--photo {
  cursor: grab;
  position: relative;
  background: #fff;
  border-radius: var(--position-indicator-width);
  box-shadow:
    rgb(0 0 0 / 20%) 0 3px 3px -2px,
    rgb(0 0 0 / 14%) 0 3px 4px 0,
    rgb(0 0 0 / 12%) 0 1px 8px 0;
}

.overlay {
  cursor: grabbing;
}

.overlay > img {
  display: block;
}

.gallery .react-photo-album--image {
  user-select: none;
  touch-action: manipulation;
  -webkit-touch-callout: none;
}

.gallery .react-photo-album--photo[data-active="true"] {
  opacity: 0.3;
}

.gallery .react-photo-album--photo[data-position="after"]:after,
.gallery .react-photo-album--photo[data-position="before"]:before {
  content: "";
  position: absolute;
  background-color: #2196f3;
  border-radius: var(--position-indicator-width);
}

.gallery .react-photo-album--rows .react-photo-album--photo[data-position="after"]:after,
.gallery .react-photo-album--rows .react-photo-album--photo[data-position="before"]:before {
  top: 0;
  bottom: 0;
  width: var(--position-indicator-width);
}

.gallery .react-photo-album--rows .react-photo-album--photo[data-position="after"]:after {
  right: var(--position-indicator-offset);
}

.gallery .react-photo-album--rows .react-photo-album--photo[data-position="before"]:before {
  left: var(--position-indicator-offset);
}

.gallery .react-photo-album--columns .react-photo-album--photo[data-position="after"]:after,
.gallery .react-photo-album--masonry .react-photo-album--photo[data-position="after"]:after,
.gallery .react-photo-album--columns .react-photo-album--photo[data-position="before"]:before,
.gallery .react-photo-album--masonry .react-photo-album--photo[data-position="before"]:before {
  left: 0;
  right: 0;
  height: var(--position-indicator-width);
}
`;

const SortableGallery = ({ gallery: Gallery, photos: photoSet, movePhoto, render, ...rest }) => {
  const ref = useRef(null);
  const [activePhoto, setActivePhoto] = useState(null);

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

  const handleDragEnd = ({ active, over }) => {
    if (over && active.id !== over.id) {
      movePhoto(
        photos.findIndex((photo) => photo.id === active.id),
        photos.findIndex((photo) => photo.id === over.id)
      );
    }
    setActivePhoto(null);
  };

  const renderSortable = (Component, index, photo, props) => (
    <Sortable key={index} id={photo.id}>
      <Component {...props} />
    </Sortable>
  );

  return (
    <>
      <style>{galleryStyles}</style>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        collisionDetection={closestCenter}
      >
        <SortableContext items={photos}>
          <div className="gallery">
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
          {activePhoto && <Overlay className="overlay" {...activePhoto} />}
        </DragOverlay>
      </DndContext>
    </>
  );
};

export default SortableGallery;
