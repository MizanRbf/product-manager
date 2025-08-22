import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import Footer from "@/app/Components/Footer/Footer";
import dbConnect from "@/lib/dbConnect";

export default async function ProductDetails({ params }) {
  const res = await dbConnect("productsCollection").find({}).toArray();
  const product = res.find((p) => p._id.toString() === params.id);

  if (!product) {
    return <div className="text-red-500 p-6">❌ Product not found</div>;
  }

  return (
    <div className="bg-gradient-to-br from-[#013f69] to-[#000]">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-208px)] pt-40 max-w-[1000px] px-4 mx-auto">
        <div className="border border-[#538fb8] p-4 rounded-lg bg-primary text-white md:max-h-[450px] min-h-[450px] flex flex-col md:flex-row  justify-between items-center gap-8 mb-10 md:mb-0">
          <div className="">
            <img
              className="rounded-sm mb-3 object-cover h-[350px] w-[800px]"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="w-full">
            <h1 className="text-xl font-bold mb-3">{product.name}</h1>
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
