import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getWomenItems } from "../utils/graphQL";
import { finalList } from "../utils/store";
const Women = () => {

  const getAll=()=>{   
    getWomenItems().then((reswomen)=>setFinalclothes(reswomen)) 
  }
  useEffect(() => {
    getAll()
    }, [])
    
  const filterShirts = () => {
    setFinalclothes(finalclothes.filter((cloth) => cloth.type === "shirt"));
    setTimeout(() => {
      getAll()
    }, 4000);
  };
  const filterJackets = () => {
    setFinalclothes(finalclothes.filter((cloth) => cloth.type === "jacket"));
    setTimeout(() => {
      getAll()
    }, 4000);
  };
  const filterPants = () => {
    setFinalclothes(finalclothes.filter((cloth) => cloth.type === "pants"));
    setTimeout(() => {
      getAll()
    }, 4000);
   
  };
  const [finalclothes, setFinalclothes] = useState([]);
  const addToCart = finalList((state) => state.addToCart);
  let items = finalList((state) => state.items);
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
            onClick={() => getAll()}
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
                  className="cursor-pointer rounded-t-lg w-[700px] h-[700px]"
                  src={cloth.mainimg.url}
                  alt={cloth.title}
                />
              </Link>
              <div className="bg-white font-semibold h-[60px] rounded-b-lg p-2 flex text-center justify-between">
                <h1 className="ml-4">{cloth.title}</h1>
                <h3 className="ml-4">{cloth.price}$</h3>
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
