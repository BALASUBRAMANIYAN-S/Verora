import BackButton from "../../components/common/BackButton";
import { countries } from "country-flag-icons";
import Request from "../../components/home/Request";
countries.includes("IND") === true;
countries.includes("ZZ") === false;

function About() {
  return (
    <div>
    
      <BackButton title={"About Us"} />
      <div className="m-5 mt-10">
        <p className="text-[16px] font-[600]">
          At Verora, every thread tells a story.
        </p>
        <p className="text-[14px]">
          We are a homegrown label rooted in the art of embroidery, blending
          traditional craftsmanship with modern fashion. <br />
          From delicate floral patterns to bold custom creations, each piece is
          thoughtfully designed and hand-finished to celebrate individuality and
          style. <br />
          <br />
          With a passion for slow fashion and detail, we bring you curated
          collections of embroidered tops, crop styles, and full-length fits —
          made with love, quality, and a touch of personal charm.
        </p>
        <ul className="ml-3 mt-10 gap-4 flex flex-col">
          <li className="flex gap-1">
            <img
              alt="India"
              className="w-5"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg"
            />
            Made in India
          </li>
          <li>❤️ Crafted with Care</li>
          <li>🎗️ Designed for You</li>
        </ul>
        <p className="mt-10">
          📌 We follow community guidelines and ethical standards in every step — from sourcing fabrics to delivering handcrafted pieces with care.
        </p>
      </div>
      <Request />
     
    </div>
  );
}

export default About;
