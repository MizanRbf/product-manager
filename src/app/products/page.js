import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import dbConnect from "@/lib/dbConnect";
import Link from "next/link";

const Products = async () => {
  const products = await dbConnect("productsCollection").find({}).toArray();

  const plainProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen pt-25 bg-gradient-to-br from-[#013f69] to-[#000] pb-20">
        <div className="max-w-[1500px] mx-auto px-4">
          <div className="w-full flex justify-center">
            <h1 className="text-center mb-10 text-white border-4 p-4 border-x-0 border-t-0 border-primary inline-block">
              Products List
            </h1>
          </div>
          <div className="border border-primary rounded-lg max-h-[600px] overflow-y-auto overflow-x-auto">
            <table className="table min-w-[800px] border-collapse">
              {/* head */}
              <thead className="bg-black sticky top-0 z-10">
                <tr className="*:text-white">
                  <th className="bg-[#00000073]">#</th>
                  <th className="bg-[#00000073]">Name</th>
                  <th className="bg-[#00000073]">Description</th>
                  <th className="bg-[#00000073]">Price</th>
                  <th className="bg-[#00000073]">Button</th>
                </tr>
              </thead>
              <tbody className="bg-white text-black">
                {plainProducts.map((product, i) => (
                  <tr className="*:text-black" key={product._id}>
                    <th>{i + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>$ {product.price}</td>
                    <td>
                      <Link href={`/products/${product._id}`}>
                        <button className="button">See Details</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
