import Button from "../../../components/common/Button";
import Orders from "../../../components/common/Orders";
import OrdersCard from "../../../components/common/OrdersCard";
import PriceDetailsCard from "../../../components/common/PriceDetailsCard";
import Link from "next/link";
function Shipping() {
  return (
    <div>
      <Orders Ordertitle="Shipping" title="Checkout" Price="Rs.899" />
     <div className="mx-4"> <OrdersCard
        title="White Vine Embroidery Tee"
        colour="White"
        size="M"
        price={899}
        originalPrice={1299}
      /> </div>

      <div className="mb-8">
        <div className="items-center text-[12px]  mt-6 mx-4 rounded-xl border-[1px]">
          <div className="flex justify-between mx-3 mt-6">
            <p>Contact</p>
            <p className="text-blue-500 border-b-2 border-blue-400">Change</p>
          </div>
          <ul className="flex flex-col gap-2 my-7 mx-3">
            <li className="font-[500]">+91 88934 45690</li>
            <li className="font-[500]">prakash@gmail.com</li>
          </ul>
          <div className="border-b-2 mx-2"></div>
          <div className="flex text-[12px] justify-between mx-3 mt-6">
            <p>Contact</p>
            <p className="text-blue-500 border-b-2 border-blue-400">Change</p>
          </div>
          <div className="ml-4">
            <p className="text-[14px] my-4  font-[500]">
              74/4, PKG Complex, Anna nagar <br />
              street, near cafe - Trichy - 689 112
            </p>
          </div>
        </div>
      </div>
      <div className="mx-3"><PriceDetailsCard /></div>
      
      <Link href={"/payments/payment"}>
       <div className="mx-4"> <Button title="Continue to Payment" varient="payment" /></div>
      </Link>
    </div>
  );
}

export default Shipping;
