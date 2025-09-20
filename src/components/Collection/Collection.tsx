import ProductCard from "@components/common/ProductCard";
import Request from "@components/home/Request";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { PiSlidersHorizontal } from "react-icons/pi";

function Collection() {
  return (
    <div>
      <div className="flex  items-center justify-between gap-4 mt-20 px-4 py-2 md:justify-center md:gap-16">
        <button className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm font-medium hover:bg-gray-100">
          <PiSlidersHorizontal size={16} />
          Filter
        </button>
        <h2 className="text-base md:text-lg font-semibold text-black">
          All Collections
        </h2>
        <button className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm font-medium hover:bg-gray-100">
          Sort by
          <BiChevronDown size={16} />
        </button>
      </div>
      <div className="flex gap-3 mx-1 items-center justify-center flex-wrap">
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemOne.png"
          itemName="Floral Bliss Top"
          price="1299.00"
          originalPrice="1599.00"
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemTwo.png"
          itemName="Bloom Charm Top"
          price="899.00"
          originalPrice="1199.00"
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemThree.png"
          itemName="Daisy Vibe Tee"
          price="899.00"
          originalPrice="1199.00"
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemFour.png"
          itemName="Bloom Crop Top"
          price="899.00"
          originalPrice="1199.00"
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemFour.png"
          itemName="Bloom Crop Top"
          price="899.00"
          originalPrice="1199.00"
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemOne.png"
          itemName="Floral Bliss Top"
          price="1299.00"
          originalPrice="1599.00"
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemTwo.png"
          itemName="Bloom Charm Top"
          price="899.00"
          originalPrice="1199.00"
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemThree.png"
          itemName="Daisy Vibe Tee"
          price="899.00"
          originalPrice="1199.00"
        />
      </div>

      <Request />
    </div>
  );
}

export default Collection;
