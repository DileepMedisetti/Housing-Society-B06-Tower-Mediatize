import { useState } from "react";
import "../css/ProjectStatus.css";

const ProjectStatus = () => {
  const images = [
    "/images/sliding-img0.png",
    "/images/sliding-img1.png",
    "/images/sliding-img2.jpg",
    "/images/sliding-img3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="project-status-section">

      {/* Section Heading */}
      <h2 className="project-status-title">
        Current Project Status - Nov 2025
      </h2>

      {/* Image Slider */}
      <div className="project-status-slider">

        <img
          src={images[currentIndex]}
          alt={`Current Project Status ${currentIndex + 1}`}
          className="project-status-image"
        />

        {/* Previous */}
        <button
          type="button"
          className="status-arrow status-arrow-left"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ‹
        </button>

        {/* Next */}
        <button
          type="button"
          className="status-arrow status-arrow-right"
          onClick={nextImage}
          aria-label="Next image"
        >
          ›
        </button>

      </div>

    </section>
  );
};

export default ProjectStatus;