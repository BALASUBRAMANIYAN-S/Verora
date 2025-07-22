import React, { Dispatch, SetStateAction } from 'react'
import OrdersCard from './OrdersCard'
import Link from 'next/link'
interface Props{
    setShowCard:Dispatch<SetStateAction<boolean>>
}


function Card({setShowCard}:Props) {
  return (
    <div className="w-[300px] sm:w-[400px]  bg-white h-screen shadow-xl p-4 flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex justify-between items-center border-b pb-2">
          <p className="text-lg font-medium">🛍 (1) Item</p>
          <button onClick={()=>setShowCard(false)} className="text-2xl font-bold">&times;</button>
        </div>

        <OrdersCard
        colour='white'
        originalPrice={1500}
        price={899}
        size='M'
        title='Checking For this Dress'/>
      </div>

      {/* Footer */}
      <div className="border-t pt-3 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <p>Discount</p>
          <p className="text-black font-medium">₹400</p>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <p>Subtotal</p>
          <p>₹899.00</p>
        </div>
       <Link href={'/payments/checkout'} > <button
       onClick={()=>setShowCard(false)}
       className="w-full bg-black text-white py-3 mt-2 rounded-lg text-sm font-medium">
          Checkout - Rs. 899.00
        </button></Link>
      </div>
    </div>
  )
}

export default Card