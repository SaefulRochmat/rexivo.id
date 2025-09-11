"use client";
import { useState, useEffect } from "react";

export default function useHeroSlider(images, interval = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slider);
  }, [images.length, interval]);

  return {
    currentIndex,
    setCurrentIndex,
  };
}
