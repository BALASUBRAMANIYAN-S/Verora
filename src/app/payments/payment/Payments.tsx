import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Orders from "../../../components/common/Orders";
import PriceDetailsCard from "../../../components/common/PriceDetailsCard";
import Button from "../../../components/common/Button";

function Payments() {
  return (
    <div>
      <Orders Ordertitle="Order Summary" title="Checkout" Price="Rs.899" />
      <div className="mt-8 mb-5">
        <div className="mx-4"><PriceDetailsCard /></div>
        <div className="font-bold ml-4">
          <p>Payment Methods</p>
        </div>
        <div className="items-center text-[12px] mt-6 mx-4 rounded-xl border-[1px]">
          {/* Header with Radio + Label + Icon */}
          <div className="flex items-center justify-between mx-3 cursor-pointer">
            <div className="flex items-center space-x-2">
              <input type="radio" className="accent-blue-500" />
              <img src="/assets/UPI.png" alt="UPI" className="h-9 w-auto" />
              <p className="font-medium">Pay via UPI</p>
            </div>
            <span className="text-xl font-semibold">
              <FaChevronDown />
            </span>
          </div>

          <hr className="my-3 mx-2" />

          {/* UPI Options */}
          <div className="flex justify-between my-5 items-center mx-3">
            <div className="flex flex-col items-center gap-1">
              <img src="/assets/gpay.svg" alt="Gpay" className="h-15 w-15" />
              <p className="text-xs mt-1">Gpay</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src="/assets/Phonepe.svg"
                alt="Phonepe"
                className="h-15 w-15"
              />
              <p className="text-xs mt-1">Phonepe</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src="/assets/Paytm.svg"
                alt="Paytm"
                className="h-15 w-15"
              />
              <p className="text-xs mt-1">Paytm</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src="/assets/Bhim.svg" alt="Bhim" className="h-15 w-15" />
              <p className="text-xs mt-1">Bhim</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl justify-between items-center p-3 flex border-[1px] m-4">
        <span className="flex items-center gap-3 "><input type="radio" className="accent-blue-500 " />
          <img src="/assets/money.png" className="w-5 h-5" alt="" />
          <p>Cash on Delivery</p></span>  
          <FaChevronDown/>
        </div>
       <div className="mx-3"><Button title="Pay now" varient="payment"/></div> 
      </div>
    </div>
  );
}

export default Payments;
