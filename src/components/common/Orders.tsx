"use client"
import { FaChevronRight } from "react-icons/fa";
import Navbar from "../common/Navbar";
import BackButton from "./BackButton";
import { useRouter } from "next/navigation";

export default function Orders({
  title,
  Ordertitle,
  Price,
}: {
  title: string;
  Ordertitle: string;
  Price: any;
}) {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <BackButton title={title} />
      <div className="border-[1px] h-11 items-center mt-10 flex justify-between bg-[#F6F6F6]">
        <p className="ml-10 gap-1 text-blue-500 flex items-center">
          {Ordertitle}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0051BC"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </p>
        <p className="mr-10 text-red-700">{Price}</p>
      </div>
      <p className="flex items-center  gap-1 ml-7 mt-4">
        <span onClick={()=>{router.push('/payments/checkout')}} className={"cursor-pointer"}>Information</span> <FaChevronRight />
        <span onClick={()=>{router.push('/payments/shipping')}} className={" cursor-pointer"}>Shipping</span> <FaChevronRight />
        <span onClick={()=>{router.push('/payments/payment')}} className={" cursor-pointer"}>Payment</span> <FaChevronRight />
      </p>
    </div>
  );
}
