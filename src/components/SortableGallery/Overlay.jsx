import React from "react";

const Overlay = ({ photo, width, height, padding, style, ...rest }) => {
  return (
    <div
      style={{
        width,
        height,
        padding,
        ...style,
      }}
      {...rest}
    >
      <img
        alt={photo.alt}
        src={photo.src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Overlay;
