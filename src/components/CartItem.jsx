import React from "react";
import toast from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed successfully");
  }

  return (
    <div>

      <div className="flex items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10  rounded-xl border-b-2 
      shadow-2xl shadow-blue-500/20">

        <div className="h-[180px]">
          <img src={item.image} alt={item.title || "Cart item"} className="w-full h-full"/>
        </div>

        <div className="flex flex-col justify-between gap-1">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-80 text-gray-400 font-normal text-[10px] text-left ">{item.description}</h1>

          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${item.price}</p>

            <div onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};

export default CartItem;
