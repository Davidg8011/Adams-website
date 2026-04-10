import { useRef, useEffect, useState } from 'react';

const images = [
  { url: '/assets/images/IMG_0198.jpg', title: 'Site Preparation' },
  { url: '/assets/images/IMG_0909.jpg', title: 'Fleet Excellence' },
  { url: '/assets/images/IMG_1515.jpg', title: 'Precision Grading' },
  { url: '/assets/images/IMG_1960.jpg', title: 'Industrial Hauling' },
  { url: '/assets/images/IMG_2343.jpg', title: 'Large Scale Demo' },
  { url: '/assets/images/IMG_7336.jpg', title: 'On-Site Operations' },
  { url: '/assets/images/IMG_8123.jpg', title: 'Concrete Foundations' },
  { url: '/assets/images/IMG_8789.jpg', title: 'Heavy Machinery' },
  { url: '/assets/images/IMG_9885.jpg', title: 'Excavation Depth' },
  { url: '/assets/images/IMG_9971.jpg', title: 'Site Equipment' },
];

function Gallery() {
  const scrollRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(1); // Default right-to-left speed
  const requestRef = useRef();

  const animate = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollSpeed;

      // Infinite loop logic
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0;
      } else if (scrollRef.current.scrollLeft <= 0) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [scrollSpeed]);

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const windowWidth = window.innerWidth;
    const threshold = 0.2; // 20% of the screen sides

    if (clientX < windowWidth * threshold) {
      setScrollSpeed(-8);
    } else if (clientX > windowWidth * (1 - threshold)) {
      setScrollSpeed(8);
    } else {
      setScrollSpeed(1);
    }
  };

  const handleMouseLeave = () => {
    setScrollSpeed(1);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const { clientX } = touch;
    const windowWidth = window.innerWidth;
    const threshold = 0.2;

    if (clientX < windowWidth * threshold) {
      setScrollSpeed(-8);
    } else if (clientX > windowWidth * (1 - threshold)) {
      setScrollSpeed(8);
    } else {
      setScrollSpeed(1);
    }
  };

  const handleTouchEnd = () => {
    setScrollSpeed(1);
  };

  // Double the images for seamless infinite scroll
  const displayImages = [...images, ...images];

  return (
    <div
      className="gallery-page"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="gallery-header">
        <h1>PROJECT GALLERY</h1>
      </div>

      <div className="gallery-scroll-container" ref={scrollRef}>
        <div className="gallery-track">
          {displayImages.map((img, index) => (
            <div key={index} className="gallery-card">
              <div className="gallery-image-wrapper">
                <img src={img.url} alt={img.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-controls-hint">
        <span>&larr; TOUCH OR HOVER SIDES TO NAVIGATE &rarr;</span>
      </div>
    </div>
  );
}

export default Gallery;
