import React, { useState, useEffect, useCallback } from 'react';

// Main component for the Scroll-to-Top button with a progress indicator.
const ScrollToTopButton = () => {
  // State to track the scroll position in percentage.
  const [scrollPercentage, setScrollPercentage] = useState(0);
  // State to control the visibility of the button.
  const [isVisible, setIsVisible] = useState(false);

  // Memoized event handler for performance. It calculates the scroll percentage
  // and updates the component's state.
  const handleScroll = useCallback(() => {
    // Get the total height of the document that is scrollable.
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calculate the current scroll position.
    const scrollTop = document.documentElement.scrollTop;
    
    // Calculate the scroll percentage.
    const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    
    setScrollPercentage(percentage);
    
    // Determine if the button should be visible (e.g., after scrolling past a certain point).
    setIsVisible(scrollTop > 300);
  }, []);

  // Effect to add and remove the scroll event listener.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the listener when the component unmounts.
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Function to smoothly scroll the window to the top.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate the circumference of the SVG circle.
  const circleRadius = 24;
  const circumference = 2 * Math.PI * circleRadius;
  
  // Calculate the stroke-dashoffset for the progress indicator.
  // The value decreases as the user scrolls down.
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* The main button container. It is only visible when isVisible is true. */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative w-12 h-12 rounded-full flex items-center justify-center
                     bg-white shadow-lg border border-gray-200 transition-opacity duration-300
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll to top"
        >
          {/* SVG for the circular progress indicator */}
          <svg className="absolute w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              className="text-gray-200"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="50%"
              cy="50%"
            />
            {/* Progress circle */}
            <circle
              className="text-blue-500 transition-all duration-300 ease-in-out"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="50%"
              cy="50%"
            />
          </svg>
          {/* The arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

// Main App component to demonstrate the button.
export default function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="p-8 text-center bg-blue-600 text-white shadow-md">
        <h1 className="text-4xl font-bold">Scroll Down to See the Button</h1>
      </div>

      {/* A large section to create a scrollable page */}
      <div className="h-[200vh] flex items-center justify-center p-8 text-lg text-gray-700">
        <p>
          Gulir ke bawah untuk melihat tombolnya. Indikator progres akan
          muncul saat Anda mulai menggulir.
        </p>
      </div>

      <ScrollToTopButton />
    </div>
  );
}
