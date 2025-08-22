import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/ProductCard/ProductCard";
import dbConnect from "@/lib/dbConnect";

const page = async () => {
  // const res = await fetch("/products.json");
  const products = await dbConnect("productsCollection").find({}).toArray();

  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-25 bg-gradient-to-br from-[#013f69] to-[#000] pb-20">
        <div className="max-w-[1500px] mx-auto px-4">
          <div className="w-full flex justify-center">
            <h1 className="text-center  mb-10 text-white border-4 p-4 border-x-0 border-t-0  border-primary inline-block">
              All Products
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
