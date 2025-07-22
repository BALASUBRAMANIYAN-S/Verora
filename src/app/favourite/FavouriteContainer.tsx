import BackButton from "../../components/common/BackButton";
import Button from "../../components/common/Button";
import ProductCard from "../../components/common/ProductCard";
import Request from "../../components/home/Request";
import Link from "next/link";
function FavouriteContainer() {
  return (
    <div>
      <BackButton title={"My Wishlist (4)"} />

      <div className="flex gap-3 justify-center flex-wrap">
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemOne.png"
          itemName="Floral Bliss Top"
          price="1299.00"
          originalPrice="1599.00"
          shwoDelete={true}
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemTwo.png"
          itemName="Bloom Charm Top"
          price="899.00"
          originalPrice="1199.00"
          shwoDelete={true}
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemTwo.png"
          itemName="Bloom Charm Top"
          price="899.00"
          originalPrice="1199.00"
          shwoDelete={true}
        />
        <ProductCard
          coverImage="/assets/ItemsCover.png"
          itemImage="/assets/ItemTwo.png"
          itemName="Bloom Charm Top"
          price="899.00"
          originalPrice="1199.00"
          shwoDelete={true}
        />
      </div>
      <div className="flex justify-center mt-28">
        <Link href="/">
          {" "}
          <Button title={"Back to home"} varient={"default"} />
        </Link>
      </div>
      <Request />
    </div>
  );
}

export default FavouriteContainer;
