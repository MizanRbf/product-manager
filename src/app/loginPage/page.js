"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import Swal from "sweetalert2";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result.error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
    }
  };
  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-br from-[#013f69] to-[#000]">
      <div className="max-w-lg bg-secondary p-6 rounded shadow-md">
        <form onSubmit={handleSubmit} className=" space-y-4 ">
          <div className="flex justify-end">
            <Link href="/">
              {" "}
              <ImCross className="text-white" />
            </Link>
          </div>
          <h2 className=" text-center text-white">Login Your Account</h2>

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
            {loading ? "Processing..." : "Login"}
          </button>
        </form>
        <p className="text-white mt-4">
          Do not have an account? please{" "}
          <Link href="/registerPage" className="font-bold underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
