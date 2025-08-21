import React from "react";
import { products } from "../page";

export default function ProductDetails({ params }) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="text-red-500 p-6">❌ Product not found</div>;
  }

  return (
    <div className="p-6">
      <div className="border border-[#538fb8] p-4 rounded-lg bg-primary text-white max-h-[450px] min-h-[450px] flex flex-col justify-between">
        <div>
          <img
            className="w-full h-[250px] rounded-sm mb-3 object-cover"
            src={product.image}
            alt={product.name}
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="font-semibold">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}
