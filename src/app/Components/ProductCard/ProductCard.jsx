"use client";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="border border-[#538fb8] p-4 rounded-lg bg-primary text-white mb-4 ">
        <div className="">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: $ {product.price}</p>
        </div>
        <Link href={`/products/${product._id}`}>
          <button className="button w-full">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
