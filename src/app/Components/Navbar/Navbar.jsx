"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import SmallDevice from "./SmallDevice";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  const linkClass = (href) =>
    pathname === href
      ? "text-primary font-bold border-b-2 border-primary pb-1"
      : "text-white";

  return (
    <div>
      <div className="flex justify-between items-center fixed top-0 right-0 left-0 px-4 py-3 bg-[#012130]">
        <h1 className="text-primary">ProMan</h1>
        <div className="gap-5 md:flex hidden">
          <Link href="/">
            <p className={linkClass("/")}>Home</p>
          </Link>
          <Link href="/products">
            <p className={linkClass("/products")}>Products List</p>
          </Link>
          <Link href="/products">
            <p className={linkClass("/dashboard")}>Dashboard</p>
          </Link>
        </div>

        {/* Login and Register */}
        <div className="gap-4 md:flex hidden">
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

        {/* Responsive Icon */}

        <button
          className="bg-white px-2 rounded-xs md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <IoMenuSharp size={30} />
        </button>
      </div>

      {/* Small Device */}
      <SmallDevice
        signOut={signOut}
        session={session}
        open={open}
        setOpen={setOpen}
      ></SmallDevice>
    </div>
  );
};

export default Navbar;
