import { FaTrash, FaTrashAlt } from "react-icons/fa";
import Button from "./Button";

export default function ProductCard(
    {coverImage,itemImage,price,itemName,originalPrice,shwoDelete}:{
        coverImage:string;
        itemImage:string;
        itemName:string;
        price:string;
      originalPrice:string;
      shwoDelete?:boolean
    
    }
) {
    return  <div className="mt-1 w-50">
          <div className="relative rounded-[20px] h-[260px] bg-[#EFEFEF] w-44 mt-10">
            <img className="absolute bottom-1 w-44" src={itemImage} alt={itemName} />
            <div className="rounded-3xl p-2 absolute bg-white top-2 left-32">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9.465 15.6075C9.21 15.6975 8.79 15.6975 8.535 15.6075C6.36 14.865 1.5 11.7675 1.5 6.51751C1.5 4.20001 3.3675 2.32501 5.67 2.32501C7.035 2.32501 8.2425 2.98501 9 4.00501C9.7575 2.98501 10.9725 2.32501 12.33 2.32501C14.6325 2.32501 16.5 4.20001 16.5 6.51751C16.5 11.7675 11.64 14.865 9.465 15.6075Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="ml-7 mt-4">{itemName}</p>
          <p className="flex items-center gap-1 ml-5 mb-3">
            Rs.{price} <span className="line-through text-xs">Rs.{originalPrice}</span>
          </p>
         <div className="flex gap-2 justify-center items-center">
          
          <Button
            title={'Add to Cart'}
            varient={'card-btn'}
          />
         {shwoDelete && <div><FaTrashAlt/></div>}
         </div>
        </div>

 
}
