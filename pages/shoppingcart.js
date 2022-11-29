import React from "react";
import Navbar from "../components/Navbar";
import { finalList } from "../utils/store";

const Shoppingcart = () => {
  let items = finalList((state) => state.items);
  const removeItem = finalList((state) => state.removeFromCart);
  const removeAll=finalList((state)=>state.removeAllItems)
  return (
    <section className=" bg-shopping h-screen">
      <Navbar></Navbar>
      <div className="bg-black rounded-lg m-28  w-3/4 h-3/4 opacity-95">
        <h1 className="text-white font-bold text-3xl p-4">Shopping cart :</h1>
        <button onClick={()=>removeAll()} className="float-right rounded-full text-black p-2 bg-white">remove all items</button>
        <ul className=" flex flex-wrap overflow-hidden ">
          {items.map((item) => (
            <li className="bg-white w-[300px]  m-4 rounded-lg" key={item.name}>
              <img
                className="w-[300px] h-[200px]   rounded-t-md"
                src={item.img.src}
                alt=""
              />
              <div className="flex p-2 justify-between items-center mt-4">
              <h1 className="ml-4">{item.title}</h1>
              <h1 className="ml-4">{item.price}</h1>
              <button
                onClick={() => removeItem(item)}
                className="text-white float-right ml-5 bg-green-900 p-2 text-center rounded-full"
              >
                remove from cart
              </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Shoppingcart;
