import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/hero.jpg')] bg-cover bg-center bg-no-repeat py-40 flex items-center justify-center">
      <div className="max-w-[1500px] mx-auto px-4 pt-[64px] text-center text-white space-y-4">
        <h1 className="text-white">Manage Your Products Easily</h1>
        <p className="bg-secondary rounded-full py-2">
          A simple Next.js app with authentication and product management.
        </p>
        {/* Button */}
        <div className="space-x-4">
          <button className="px-6 py-1 rounded-sm bg-white text-primary font-bold text-lg cursor-pointer">
            Get Started
          </button>
          <button className="px-6 py-1 rounded-sm bg-white text-primary font-bold text-lg cursor-pointer">
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
