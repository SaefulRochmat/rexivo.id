// hooks/forComponentsTemplate/useTestimonials.js
"use client";

import { useState, useEffect } from "react";
import testimonialsData from "@/constants/forTemplate2/TestiMonialsData";

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Simulasi fetch API / ambil data dari constants
    setTestimonials(testimonialsData);
  }, []);

  return testimonials;
}
