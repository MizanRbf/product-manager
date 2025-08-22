"use client";
import React from "react";
import Lottie from "lottie-react";
import errorPage from "../../public/404 blue.json";
const notFound = () => {
  return (
    <div className="max-w-[700px] mx-auto mt-30">
      <Lottie animationData={errorPage}></Lottie>
    </div>
  );
};

export default notFound;
