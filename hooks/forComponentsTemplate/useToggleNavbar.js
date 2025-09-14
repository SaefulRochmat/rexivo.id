'use client'
import { useState, useEffect } from "react";

export default function useToggle(initial = false) {
  const [open, setOpen] = useState(initial);
  const toggle = () => setOpen((v) => !v);
  return { open, toggle, setOpen };
}