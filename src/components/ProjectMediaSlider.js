import React, { useState, useRef, useEffect } from "react";

const ProjectMediaSlider = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef({});
  
  useEffect(() => {
    // Pause all videos when switching slides
    Object.values(videoRefs.current).forEach(videoRef => {
      if (videoRef) {
        videoRef.pause();
      }
    });
    
    // Play the current video if it's a video
    const currentMedia = media[currentIndex];
    if (currentMedia.type === 'video') {
      const videoRef = videoRefs.current[currentMedia.id];
      if (videoRef) {
        videoRef.play();
      }
    }
  }, [currentIndex, media]);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
  };
  
  if (!media || media.length === 0) return null;
  
  const currentMedia = media[currentIndex];
  
  return (
    <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-6 border border-gray-700">
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        {currentMedia.type === 'image' ? (
          <img 
            src={currentMedia.src} 
            alt={currentMedia.caption} 
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            ref={ref => videoRefs.current[currentMedia.id] = ref}
            src={currentMedia.src}
            className="w-full h-full object-contain"
            controls
            loop
            playsInline
          />
        )}
        
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-white shadow-md transition duration-200 z-10"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-white shadow-md transition duration-200 z-10"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Caption and Progress Indicators */}
      <div className="p-4 bg-gray-800">
        <p className="text-sm text-gray-300 mb-3">{currentMedia.caption}</p>
        <div className="flex justify-center space-x-1">
          {media.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-6 bg-blue-500' 
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMediaSlider;