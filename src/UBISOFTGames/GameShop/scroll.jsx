import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position and update the button visibility
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 50); // Adjust this value based on when you want the button to appear
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // You can change this to "auto" for an instant jump
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="md:hidden xs:hidden w-[40px] h-[40px] flex justify-center fixed right-20 bottom-[40px] items-center text-[30px] text-[#1cafbe] border-2 border-[#1cafbe]  bg-transparent rounded-full" onClick={scrollToTop}>
            <i class="fa-solid fa-angle-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
