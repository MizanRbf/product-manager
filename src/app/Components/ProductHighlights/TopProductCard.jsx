import Link from "next/link";
import React from "react";

const TopProductCard = ({ product }) => {
  return (
    <div className="border border-[#538fb8] p-4 rounded-lg bg-primary text-white md:h-[600px] min-h-[450px] flex flex-col">
      <img
        className="rounded-sm mb-3 object-cover h-[300px] w-full"
        src={product.image}
        alt={product.name}
      />

      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-3">{product.name}</h2>
          <p>
            <span className="font-bold">Category: </span> {product.category}
          </p>
          <p>
            <span className="font-bold">Price: </span> ${product.price}
          </p>
          <p>
            <span className="font-bold">Brand: </span>
            {product.brand}
          </p>
          <p>
            <span className="font-bold">Stock: </span>
            {product.stock}
          </p>
          <p>
            <span className="font-bold">Description: </span>
            {product.description}
          </p>
        </div>

        <Link href={`/products/${product._id}`} className="mt-4">
          <button className="button w-full">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default TopProductCard;
