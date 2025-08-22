import dbConnect from "@/lib/dbConnect";
import React from "react";
import TopProductCard from "./TopProductCard";

const TopProducts = async () => {
  const products = await dbConnect("productsCollection")
    .find({})
    .limit(6)
    .toArray();

  const plainProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  return (
    <div>
      {/* Title */}
      <div className="w-full flex justify-center">
        <h1 className="text-center my-10  text-secondary border-4 p-4 border-x-0 border-t-0 border-primary inline-block">
          Top Products
        </h1>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {plainProducts.map((product) => (
          <div key={product._id}>
            <TopProductCard product={product}></TopProductCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
