"use client";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="border border-[#538fb8] p-4 rounded-lg bg-primary text-white max-h-[450px] min-h-[450px] flex flex-col justify-between">
        <div className="">
          <img
            className="w-full h-[250px] rounded-sm mb-3"
            src={product.image}
            alt=""
          />

          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: $ {product.price}</p>
        </div>
        <Link href={`/products/${product.id}`}>
          <button className="button w-full">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
