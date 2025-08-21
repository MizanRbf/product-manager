"use client";
import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded shadow-md space-y-4 max-w-lg bg-secondary"
      >
        <div className="flex justify-end">
          <Link href="/">
            {" "}
            <ImCross className="text-white" />
          </Link>
        </div>
        <h1 className=" text-center text-white">Login</h1>

        <input
          name="email"
          type="text"
          placeholder="Email"
          className="border border-white p-2 w-full rounded-sm bg-white"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border border-white p-2 w-full rounded-sm bg-white"
        />

        <button
          type="submit"
          className="bg-primary rounded-sm text-white px-4 py-2 w-full cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
