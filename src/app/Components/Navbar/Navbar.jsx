"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const linkClass = (href) =>
    pathname === href
      ? "text-primary font-bold border-b-2 border-primary pb-1"
      : "text-white";

  return (
    <div className="flex justify-between items-center fixed top-0 right-0 left-0 px-4 py-3 bg-[#012130]">
      <h1 className="text-primary">ProductManager</h1>
      <div className="flex gap-5">
        <Link href="/">
          <p className={linkClass("/")}>Home</p>
        </Link>
        <Link href="/products">
          <p className={linkClass("/products")}>Products</p>
        </Link>
        <Link href="/products">
          <p className={linkClass("/dashboard")}>Dashboard</p>
        </Link>
      </div>

      {/* Login and Register */}
      <div className="flex gap-4">
        {session ? (
          <button className="button" onClick={() => signOut()}>
            Logout
          </button>
        ) : (
          <Link href="/loginPage">
            <button className="button">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
