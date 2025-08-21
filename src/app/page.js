import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <header className="">
        {/* Navbar */}
        <Navbar></Navbar>

        {/* Hero Section */}
        <Hero></Hero>
      </header>

      {/* Main */}
      <main className="min-h-[calc(100vh-224px)] px-4 max-w-[1500px] mx-auto">
        {/* Product Highlights */}
      </main>

      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomePage;
