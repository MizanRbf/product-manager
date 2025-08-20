import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 right-0 left-0 px-4 py-3 bg-[#012130]">
      <h1 className="text-primary">ProductManager</h1>
      <button className="button">Login</button>
    </div>
  );
};

export default Navbar;
