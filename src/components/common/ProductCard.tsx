"use client";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";

export default function ProductCard({
  coverImage,
  itemImage,
  price,
  itemName,
  originalPrice,
  shwoDelete,
}: {
  coverImage: string;
  itemImage: string;
  itemName: string;
  price: string;
  originalPrice: string;
  shwoDelete?: boolean;
}) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="mt-1 w-auto">
      <div className="relative rounded-[20px] h-[260px] bg-[#EFEFEF] w-44 mt-10">
        <img
          className="absolute bottom-1 w-44"
          src={itemImage}
          alt={itemName}
        />
        <div
          className="rounded-3xl p-2 absolute bg-white top-2 left-32 cursor-pointer"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            // Filled red heart
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path
                d="M11.33 0.326538C9.9725 0.326538 8.7575 0.986538 8 1.99904C7.6131 1.48065 7.11069 1.05958 6.53265 0.769259C5.95461 0.478936 5.31685 0.327352 4.67 0.326538C2.3675 0.326538 0.5 2.20154 0.5 4.51904C0.5 5.41154 0.6425 6.23654 0.89 7.00154C2.075 10.7515 5.7275 12.994 7.535 13.609C7.79 13.699 8.21 13.699 8.465 13.609C10.2725 12.994 13.925 10.7515 15.11 7.00154C15.3575 6.23654 15.5 5.41154 15.5 4.51904C15.5 2.20154 13.6325 0.326538 11.33 0.326538Z"
                fill="#EF4D4E"
              />
            </svg>
          ) : (
            // Outline heart
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9.465 15.6075C9.21 15.6975 8.79 15.6975 8.535 15.6075C6.36 14.865 1.5 11.7675 1.5 6.51751C1.5 4.20001 3.3675 2.32501 5.67 2.32501C7.035 2.32501 8.2425 2.98501 9 4.00501C9.7575 2.98501 10.9725 2.32501 12.33 2.32501C14.6325 2.32501 16.5 4.20001 16.5 6.51751C16.5 11.7675 11.64 14.865 9.465 15.6075Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <p className="mt-4 flex items-center justify-center">{itemName}</p>
      <p className="flex items-center justify-center gap-1 left-0 right-0 mb-3">
        Rs.{price}
        <span className="line-through text-xs">Rs.{originalPrice}</span>
      </p>
      <div className="flex gap-2 justify-center left-0 right-0 items-center">
        <Button
          onClick={() =>
            alert(
              `Name: ${itemName}\nPrice: ${price}\nThanks For Visiting Verora Page`
            )
          }
          title={"Add to Cart"}
          varient={"card-btn"}
        />
        {shwoDelete && (
          <div>
            <FaTrashAlt />
          </div>
        )}
      </div>
    </div>
  );
}
