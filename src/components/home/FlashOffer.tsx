function FlashOffer() {
  return (
    <div className=" rounded-2xl mt-10 items-center mx-auto overflow-hidden bg-[#d8a840]">
      <div className="flex items-center justify-between">
        <div>
          <p className=" ml-2 text-white">
            Get up to 30% OFF on embroidered tops.
          </p>
          <button className="border-2 ml-3 mt-3 mb-1 rounded-3xl bg-white border-white">
            <p className="text-black p-1">Shop Now</p>
          </button>
        </div>
        <img src="/assets/ImageForCart.png" className=" ml-5" alt="" />
      </div>
    </div>
  );
}

export default FlashOffer;
