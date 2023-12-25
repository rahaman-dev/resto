"use client";
import { useEffect } from "react";
import AOS from "aos";

export const AOSComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
};
