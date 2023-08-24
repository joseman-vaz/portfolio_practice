import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Profile = () => {
  const images = [
    { url: "/portfolio_practice/assets/me_small_size.png", title: "Me" },
    { url: "/portfolio_practice/assets/barcelona.jpg", title: "Barcelona" },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <Navbar />
      <h1 className="profile_name center-container">Hey 👋🏼 I am Jose</h1>
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
      <div className="header_animation">
        <h1>Let's work together.</h1>
        <h1>
          <a href="mailto:vazquez.lopez.josem@gmail.com">
            <span>Get in touch.</span>
          </a>
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
