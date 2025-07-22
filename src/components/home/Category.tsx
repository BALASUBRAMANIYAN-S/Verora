import ProductCard from "../common/ProductCard";

function Category() {
  return (
    <div>
      <center>
        <p className="mt-9 fontStyleHeroImage text-xl font-[700]">
          Popular Designs
        </p>
      </center>
      <center>
        <div className="flex gap-3 items-center justify-center flex-wrap">
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
        </div>
      </center>
      <center>
        <button className="rounded-3xl bg-transparent border-2 border-[#865CBD] text-[#865CBD] p-2 mt-16">
          <p className="pl-4 pr-4">View Collection</p>
        </button>
      </center>
    </div>
  );
}

export default Category;
