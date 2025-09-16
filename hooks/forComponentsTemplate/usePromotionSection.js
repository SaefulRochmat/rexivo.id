// hooks/forComponentsTemplate/usePromotionSection.js
import { useState, useEffect } from "react";

export function usePromotionSection(mockupLength, intervalTime = 3000) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mockupLength);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [mockupLength, intervalTime]);

  return { isVisible, currentImageIndex };
}
