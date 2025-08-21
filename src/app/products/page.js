import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/ProductCard/ProductCard";

export const products = [
  {
    id: 1,
    name: "Smart Watch",
    description: "Stylish smartwatch with fitness tracking and notifications.",
    price: 120,
    image: "https://i.dawn.com/primary/2024/10/1613532964f8bd2.png",
  },
  {
    id: 2,
    name: "Smartphone",
    description: 'Latest Android phone with 6.5" display and dual camera.',
    price: 650,
    image:
      "https://www.honor.com/content/dam/honor/uk/blog/2024/5-things-a-smartphone-can-do/imgs-01.jpg", // smartphone
  },
  {
    id: 3,
    name: "Laptop",
    description: "Powerful laptop with 16GB RAM and 512GB SSD.",
    price: 999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SbGmy9x7AGkFuq3RB6pjCw0tON0ZeK5sUA&s", // laptop
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    description: "Noise-canceling wireless earbuds with long battery life.",
    price: 80,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzrd0mTSo8aYT4WMWJVeCjdLUUOnO7rgLHg&s", // earbuds
  },
  {
    id: 5,
    name: "Tablet",
    description: "Slim tablet perfect for work, study, and entertainment.",
    price: 450,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElvBzg520NGL3DV00RIdbH4L0sPZSgSGh-Q&s", // tablet
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with deep bass.",
    price: 95,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9491-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", // speaker
  },
  {
    id: 7,
    name: "Gaming Mouse",
    description: "RGB backlit gaming mouse with adjustable DPI.",
    price: 45,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL06NV9-oX5gf0zxV0Pt_IDUVHoeg3q1JnZA&s", // gaming mouse
  },
  {
    id: 8,
    name: "Keyboard",
    description: "Mechanical keyboard with customizable LED lights.",
    price: 70,
    image:
      "https://media.wired.com/photos/65b0438c22aa647640de5c75/4:3/w_2400,h_1800,c_limit/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.jpg", // keyboard
  },
  {
    id: 9,
    name: "DSLR Camera",
    description: "24MP DSLR camera with interchangeable lenses.",
    price: 850,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5n1olyo8vfbhyI_7ybwBsGbdCpcbYWPlBLg&s", // DSLR camera
  },
  {
    id: 10,
    name: "Power Bank",
    description: "20000mAh fast-charging portable power bank.",
    price: 40,
    image:
      "https://www.macworld.com/wp-content/uploads/2025/04/3_PowerBanks-2.jpg?quality=50&strip=all", // power bank
  },
  {
    id: 11,
    name: "Smart TV",
    description: "50-inch 4K UHD Smart TV with streaming apps built-in.",
    price: 600,
    image:
      "https://acmartbd.com/wp-content/uploads/2023/02/Xiaomi-MI-A2-43-inch-Smart-LED-TV-924x784.jpg", // smart tv
  },
  {
    id: 12,
    name: "Headphones",
    description: "Over-ear headphones with premium sound quality.",
    price: 150,
    image:
      "https://dlcdnwebimgs.asus.com/gain/4BB18AEF-347E-4DB6-B78C-C0FFE1F20385/w750/h470/fwebp", // headphones
  },
];

const page = () => {
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
