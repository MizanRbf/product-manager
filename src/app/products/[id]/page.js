import React from "react";
import { products } from "../page";
import Navbar from "@/app/Components/Navbar/Navbar";
import Footer from "@/app/Components/Footer/Footer";

export default function ProductDetails({ params }) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="text-red-500 p-6">❌ Product not found</div>;
  }

  return (
    <div className="bg-gradient-to-br from-[#013f69] to-[#000]">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-224px)] pt-40 max-w-[1000px] px-4 mx-auto">
        <div className="border border-[#538fb8] p-4 rounded-lg bg-primary text-white max-h-[450px] min-h-[450px] flex flex-col md:flex-row  justify-between items-center gap-8">
          <div className="">
            <img
              className="rounded-sm mb-3 object-cover h-[350px] w-[800px]"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="w-full">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-semibold">Price: ${product.price}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
