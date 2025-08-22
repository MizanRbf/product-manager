"use client";
import Link from "next/link";
import React from "react";

const SmallDevice = ({ open, setOpen, signOut, session }) => {
  return (
    <div>
      <nav
        className={`absolute top-18 lg:hidden right-0 left-0 py-6 shadow bg-[rgba(0,0,0,0.81)]  text-lg font-bold text-white transform transition-all ease-in-out duration-300 z-50 ${
          open
            ? "opacity-100 translate-y-2 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <ul className="px-10 *:hover:bg-white *:hover:text-black  *:hover:duration-300 space-y-2">
          <li>
            <Link href="/">
              <button
                className="w-full text-left cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <button
                className="w-full text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Product List
              </button>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <button
                className="w-full text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </button>
            </Link>
          </li>
        </ul>
        {/* Login Button */}

        <div className="px-10">
          {session ? (
            <button
              onClick={() => signOut()}
              className="cursor-pointer py-2 mt-2 bg-white rounded-sm text-primary shadow-2xl w-full hover:bg-[rgb(248,237,208)]"
            >
              Logout
            </button>
          ) : (
            <Link href="/loginPage">
              <button
                className="cursor-pointer py-2 mt-2 bg-white rounded-sm
                    text-primary shadow-2xl w-full"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default SmallDevice;
