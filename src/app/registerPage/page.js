"use client";
import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";
import { registerUser } from "../actions/auth/registerUser";

const RegisterPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({ name, email, password });
  };
  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-br from-[#013f69] to-[#000]">
      <div className="p-6 rounded shadow-md  max-w-lg bg-secondary">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-end">
            <Link href="/">
              {" "}
              <ImCross className="text-white" />
            </Link>
          </div>
          <h2 className=" text-center text-white">Register Your Account</h2>

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="border border-white p-2 w-full rounded-sm bg-white"
          />
          <input
            name="email"
            type="email"
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
            Register
          </button>
        </form>

        <p className="text-white mt-4">
          Already have an account? please{" "}
          <Link href="/loginPage" className="font-bold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
