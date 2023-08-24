import { useState } from "react";

const Gallery = () => {
  const images = [
    { url: "/portfolio_practice/assets/img1.jpg", title: "Project1" },
    { url: "/portfolio_practice/assets/img2.jpg", title: "Project2" },
    { url: "/portfolio_practice/assets/img3.jpg", title: "Project3" },
    { url: "/portfolio_practice/assets/img4.jpg", title: "Project4" },
    { url: "/portfolio_practice/assets/img5.jpg", title: "Project5" },
    { url: "/portfolio_practice/assets/img6.jpg", title: "Project6" },
    // { url: "/src/assets/img7.jpg", title: "Project7" },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className="gallery-image-container"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={image.url}
            alt={`Image ${index}`}
            className={`gallery-image ${
              hoveredIndex === index ? "hovered" : ""
            }`}
          />
          {hoveredIndex === index && (
            <div className="image-title">{image.title}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
