import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#012130] text-white rounded p-6">
      <h1 className="">ProMan</h1>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products List</Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ProMan
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
