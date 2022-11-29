import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

import hollister_spring from "../public/images/spring-1.jpg";
import americaneagle_spring from "../public/images/spring-2.jpeg";
import armani_spring from "../public/images/spring-3.jpg";
import uspolo_spring from "../public/images/spring04.jpg";
import { finalList } from "../utils/store";
const Women = () => {
  const clothes = [
    {
      title: "pant-1",
      img: americaneagle_spring,
      price: "18.99$",
      id: "1",
      type: "pants",
    },
    {
      title: "shirt-1",
      img: hollister_spring,
      price: "18.99$",
      id: "2",
      type: "shirt",
    },
    {
      title: "Jacket-1",
      img: armani_spring,
      price: "18.99$",
      id: "3",
      type: "jacket",
    },
    {
      title: "shirt-2",
      img: uspolo_spring,
      price: "18.99$",
      id: "4",
      type: "shirt",
    },

    {
      title: "Jacket-2",
      img: uspolo_spring,
      price: "18.99$",
      id: "4",
      type: "jacket",
    },
  ];

  const filterShirts = () => {
    setFinalclothes(clothes.filter((cloth) => cloth.type === "shirt"));
    console.log(finalclothes);
  };
  const filterJackets = () => {
    setFinalclothes(clothes.filter((cloth) => cloth.type === "jacket"));
    console.log(finalclothes);
  };
  const filterPants = () => {
    setFinalclothes(clothes.filter((cloth) => cloth.type === "pants"));
    console.log(finalclothes);
  };
  const [finalclothes, setFinalclothes] = useState(clothes);
  const addToCart = finalList((state) => state.addToCart);
  let items=finalList((state)=>state.items)
  return (
    <div className="">
      <div className="sm:bg-men bg-men-mobile w-[700px]  md:w-[100%]  h-[700px]">
        <Navbar></Navbar>
      </div>
      <div className="bg-black ">
        <div className="flex gap-20 p-5 justify-center">
          <button
            onClick={() => filterShirts()}
            className="text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full"
          >
            Shirts
          </button>
          <button
            onClick={() => filterPants()}
            className="text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full"
          >
            Pants
          </button>
          <button
            onClick={() => filterJackets()}
            className="text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full"
          >
            Jackets
          </button>
          <button
            onClick={() => setFinalclothes(clothes)}
            className="text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full"
          >
            View all
          </button>
        </div>
        {console.log(items)}
        <ul className="flex flex-wrap justify-center">
          {finalclothes.map((cloth) => (
           
              <li key={cloth.title} className=" m-5 ">
                 <Link key={cloth.title} href={`/men/${cloth.id}`}>

                <img
                  className="cursor-pointer rounded-t-lg w-[400px] h-[300px]"
                  src={cloth.img.src}
                  alt={cloth.title}
                />
                 </Link>
                <div className="bg-white font-semibold h-[60px] rounded-b-lg p-2 flex text-center justify-between">
                  <h1 className="ml-4">{cloth.title}</h1>
                  <h3 className="ml-4">{cloth.price}</h3>
                  <button
                    onClick={() => addToCart(cloth)}
                    className="text-white float-right bg-green-900 p-2 text-center rounded-full"
                  >
                    add to cart
                  </button>
                </div>
              </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Women;
