import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0) );
  }, [cart]);

  return (
    <div className="container mx-auto px-4 py-4">
      {
        cart.length > 0 ?
        (<div className="flex items-center justify-center border-2 mx-auto my-auto gap-0">

          <div className="flex flex-col items-center justify-center p-2 ml-auto my-auto space-y-10 space-x-1 min-h-[80vh] lg:space-y-10 w-full lg:w-2/3">
          {
            cart.map(  (item,index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
            })
          }
          </div>

          <div className="flex flex-col justify-between p-4  mx-auto my-auto space-y-10 space-x-5 min-h-[80vh] w-full lg:w-1/3">

            <div className="py-8">
              <div className="w-40 text-black-400 font-bold text-[20px] text-left">Your Cart</div>
              <div className="text-green-700 font-semibold text-[50px] uppercase text-left">Summary</div>
              <p>
                <span className="text-black-400 font-normal text-[15px] ">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-black-400 font-normal text-[15px] ">Total Amount: <span className="font-bold">${totalAmount}</span></p>
              <button className="text-white border-2 bg-green-700 font-semibold text-[12px] p-3 px-3 my-4 uppercase
            hover:bg-white
            hover:text-green-700   transition duration-300 ease-in">
                Checkout Now
              </button>
            </div>

          </div>

        </div>
          ) :
        (
          <div className="flex flex-col justify-center items-center mx-auto my-auto text-center py-10">
            <h1 className="text-2xl">Cart Empty</h1>
            <Link to={"/"}>
              <button className="mt-5 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-white hover:text-green-700">
                Shop Now
              </button>
            </Link>
          </div>
        )
      } 
    </div>
  )
};

export default Cart;
