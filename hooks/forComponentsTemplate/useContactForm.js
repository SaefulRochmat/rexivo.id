'use client';

import { useState, useEffect } from "react";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stars, setStars] = useState([]);

  // generate stars sekali di client
  useEffect(() => {
    const generated = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setStars(generated);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
    }, 2000);
  };

  return {
    formData,
    setFormData,
    focusedField,
    setFocusedField,
    isSubmitting,
    stars,
    handleInputChange,
    handleSubmit,
  };
};
