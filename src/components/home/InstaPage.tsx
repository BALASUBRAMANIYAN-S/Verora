import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function InstaPage() {
  return (
    <div>
      <center>
        <p className="mt-16">Verora Instagram ❤️</p>
        <p className="mt-4">
          Follow us at{" "}
          <span className="border-b-2 border-[#000]">verora.in</span>
        </p>
        <div className="flex items-center justify-center mt-8 ">
          <img className="w-[10%]" src="/assets/InstapageRight.png" alt="" />
          <img className="w-[70%]" src="/assets/InstapageImage.png" alt="" />
          <img className="w-[10%]" src="/assets/InstapageLeft.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
         <FaChevronLeft/>
          <FaChevronRight/>
        </div>
      </center>
    </div>
  );
}

export default InstaPage;
