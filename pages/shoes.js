import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getShoes, getShoesRunning, getShoesWalking } from "../utils/graphQL";
import { finalList } from "../utils/store";
const Shoes = () => {

  const getAll=()=>{
    getShoes().then((resShoes)=>setFinalclothes(resShoes))
    }
    useEffect(() => {
    getAll()
    }, [])
    
  const filterWalking = () => {
   
    setFinalclothes(finalclothes.filter((cloth) => cloth.type === "walking"));
    setTimeout(() => {
      getAll()
    }, 1000);
    
  };
  const filterCasual= () => {
    
    setFinalclothes(finalclothes.filter((cloth) => cloth.type === "casual"));
    setTimeout(() => {
      getAll()
    }, 1000);
    
  };
  const filterRunning = () => {
    
    setFinalclothes(finalclothes.filter((cloth) => cloth.type === "running"));
    setTimeout(() => {
      getAll()
    }, 1000);
    
    
  };
  const [finalclothes, setFinalclothes] = useState([]);

  const addToCart = finalList((state) => state.addToCart);
  return (
    <div className="">
      <div className="sm:bg-men bg-men-mobile w-[700px]  md:w-[100%]  h-[700px]">
        <Navbar></Navbar>
      </div>
      <div className="bg-black ">
        <div className="flex gap-20 p-5 justify-center">
          <button
            onClick={() => filterWalking()}
            className="text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full"
          >
            Walking
          </button>
          <button
            onClick={() => filterCasual()}
            className="text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full"
          >
            casual
          </button>
          <button
            onClick={() => filterRunning()}
            className="text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full"
          >
            Running
          </button>
          <button
            onClick={() => getAll()}
            className="text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full"
          >
            View all
          </button>
        </div>
        
        <ul className="flex flex-wrap justify-center">
          {finalclothes.map((cloth) => (
           
              <li key={cloth.title} className=" m-5 ">
                 <Link key={cloth.title} href={`/men/${cloth.productId}`}>

                <img
                  className="cursor-pointer rounded-t-lg w-[400px] h-[300px]"
                  src={cloth.mainimg.url}
                  alt={cloth.title}
                />
                 </Link>
                <div className="bg-white font-semibold h-[60px] rounded-b-lg p-2 flex text-center justify-between">
                  <h1 className="ml-4">{cloth.title.substring(0,30)}</h1>
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

export default Shoes;
