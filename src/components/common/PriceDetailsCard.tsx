export default function PriceDetailsCard() {
  return (
    <div className="max-w-sm mx-auto border rounded-xl p-4 shadow-sm mb-5 text-sm">
      <div className="flex justify-between items-center mb-2">
        <p className="font-medium">Price Details (1 Items)</p>
        <p className="text-pink-600 font-semibold">₹899.00</p>
      </div>

      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <p>Total MRP</p>
          <p className="font-medium">₹1,299</p>
        </div>
        <div className="flex justify-between">
          <p>Verora Discount</p>
          <p className="text-red-500">- ₹400</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p className="text-green-600 font-medium">Free</p>
        </div>
      </div>

      <hr className="my-3 border-gray-300" />

      <div className="flex justify-between text-base font-semibold">
        <p>Subtotal</p>
        <p>₹899.00</p>
      </div>
    </div>
  );
}
