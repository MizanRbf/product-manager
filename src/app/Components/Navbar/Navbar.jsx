import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 right-0 left-0 px-4 py-3 bg-[#012130]">
      <h1 className="text-primary">ProductManager</h1>
      <Link href="/loginPage">
        <button className="button">Login</button>
      </Link>
    </div>
  );
};

export default Navbar;
