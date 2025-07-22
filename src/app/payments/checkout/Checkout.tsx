import Button from "../../../components/common/Button";
import CountryCodeDropdown from "../../../components/common/CountryCodeDropdown";
import Input from "../../../components/common/Input";
import Orders from "../../../components/common/Orders";
import Link from "next/link";

function Checkout() {
  return (
    <div>
      <Orders Ordertitle="Checkout" Price="Rs.899" title="Checkout" />

      <div className="px-7 mt-10">
        <div className="flex items-center justify-between ">
          <p className=" font-[600] ">Contact</p>
          <p className="text-[#0051BC]  border-[#0051BC] border-b-[1px]">
            Log in
          </p>
        </div>

        <div className=" flex mt-4 items-center gap-2 ">
          <CountryCodeDropdown />
          <input
            type="number"
            className="w-full flex items-center justify-between px-3 py-2 border rounded-lg text-sm focus:outline-none"
          ></input>
        </div>
        <div>
          <p className="mt-6 font-[600]">Shipping Address</p>
          <form action="#">
            <ul className="gap-5 mt-6 flex flex-col">
              <li>
                <Input title="First Name *" />
              </li>
              <li>
                <Input title="Last Name" />
              </li>
              <li>
                <Input title="Country *" />
              </li>
              <li>
                <Input title="State*" />
              </li>
              <li>
                <Input title="Address*" />
              </li>
              <li>
                <Input title="Apartment, Flat no, etc" />
              </li>
              <li>
                <Input title="City*" />
              </li>
              <li>
                <Input title="Pin Code*" />
              </li>
              <li>
                <Input title="Email*" />
              </li>
            </ul>
            <span className="flex items-center mt-4">
              <input type="checkbox" className="m-1" />
              Save this information for next time
            </span>
          </form>
        </div>
        <div className="mt-7 ">
          <Link href={'/payments/shipping'}>
            <Button title="Continue to shipping" varient="payment" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
