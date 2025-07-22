"use client"
import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type OrdersCardProps = {
  title: string;
  colour: string;
  size: string;
  price: number;
  originalPrice: number;
};

const OrdersCard: React.FC<OrdersCardProps> = ({
  title,
  colour,
  size,
  price,
  originalPrice,
}) => {
  const [count, setCount] = useState<number>(1);
  const finalPrice = count * price;

  const handleClickPlus = (): void => {
    setCount(count + 1);
  };

  const handleClickReduce = (): void => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="border rounded-xl p-3 flex flex-row gap-4 items-center mt-10 justify-between w-full max-w-md">
      {/* Product Image */}
      <img
        src="/assets/PayIco.jpg"
        alt="product"
        className="h-[135px] w-[90px] object-cover rounded-lg"
      />

      {/* Details Section */}
      <div className="flex flex-col justify-between flex-1">
        {/* Name */}
        <p className="font-semibold text-base">{title}</p>

        {/* Color & Size */}
        <div className="flex gap-4 text-sm mt-1">
          <p>
            Color: <span className="text-[#0051BC]">{colour}</span>
          </p>
          <p>
            Size: <span className="text-[#6B46C1]">{size}</span>
          </p>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-[#D91B1B] font-bold text-lg">
            Rs. {finalPrice.toFixed(2)}
          </span>
          <span className="text-gray-500 line-through text-sm ml-2">
            Rs. {(originalPrice * count).toFixed(2)}
          </span>
          
        </div>

        {/* Quantity Controller */}
        <div className="flex items-center gap-4 mt-3">
          <button
            onClick={handleClickReduce}
            className=" w-7 h-7 flex items-center justify-center"
          ><FaMinusCircle/>
          </button>
          
          <span className="text-base">{count}</span>
          <button
            onClick={handleClickPlus}
            className="w-7 h-7 flex items-center justify-center"
          >
           <FaPlusCircle/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
