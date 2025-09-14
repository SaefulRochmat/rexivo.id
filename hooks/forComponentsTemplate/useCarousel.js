'use client';

import { useState, useEffect } from "react";export function useCarousel(itemsLength, interval = 5000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % itemsLength);
    }, interval);
    return () => clearInterval(id);
  }, [itemsLength, interval]);
  const jump = (i) => setIndex(((i % itemsLength) + itemsLength) % itemsLength);
  return { index, jump };
}