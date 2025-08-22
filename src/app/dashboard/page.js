"use client";

import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { IoReturnDownBack } from "react-icons/io5";
import Link from "next/link";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    brand: "",
    stock: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newProduct = {
      name: form.name.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      image: form.image.value,
      brand: form.brand.value,
      stock: form.stock.value,
      category: form.category.value,
    };

    try {
      const res = await axios.post("/api/products", newProduct);

      if (res.data.success) {
        Swal.fire("Success", "Product added successfully!", "success");
        form.reset();
      } else {
        Swal.fire("Error", "Something went wrong!", "error");
      }
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className=" bg-gradient-to-br from-[#013f69] to-[#000] h-screen pt-40">
      <div className="max-w-2xl mx-auto  bg-white rounded shadow">
        <h1 className="text-center mb-4  text-white py-6 rounded-t-xs bg-secondary">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3 p-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock Quantity"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-secondary text-white p-2 rounded hover:bg-[#015091] cursor-pointer"
          >
            Add Product
          </button>
        </form>
      </div>
      <div className="w-full flex justify-start max-w-2xl mx-auto">
        <Link href="/">
          <button className="text-white button flex items-center gap-2 mt-4">
            <IoReturnDownBack size={20} className="font-bold" />
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddProductForm;
