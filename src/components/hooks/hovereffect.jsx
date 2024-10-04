import { useState } from "react";

const useHoverEffect = (initialImage, hoverImage) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    image: isHovered ? hoverImage : initialImage,
    handleMouseEnter,
    handleMouseLeave,
    isHovered,
  };
};

export default useHoverEffect;
