import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 mt-6 py-8 text-sm font-sans">
      {/* Brand and Description */}
      <div className="mb-6 flex justify-between">
        <span>
        <h1 className="fontStyleForLogo text-3xl font-semibold mb-1">Verora</h1>
        <p className="text-gray-400 text-sm leading-snug">
          In Our Verora, We Customize<br />
          Every Thread to Tell Your Story
        </p>
</span>
        {/* Social Icons */}
        <div className="flex items-center gap-4 mt">
          <div className="bg-white text-black p-2 rounded-full">
            <FaFacebookF />
          </div>
          <div className="bg-white text-black p-2 rounded-full">
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <FaPhoneAlt className="text-lg" />
          <span>+91 87653 23567</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-lg" />
          <span>support@verora.com</span>
        </div>
      </div>

      {/* Links */}
      <div className="mb-6 flex justify-between">
        <div>
          <h2 className="font-semibold mb-2">Company</h2>
          <ul className="space-y-1 text-gray-300">
            <li>Home</li>
            <li>About us</li>
            <li>Customize</li>
            <li>Shop</li>
            <li>Our Contacts</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Legal</h2>
          <ul className="space-y-1 text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Shipping Policy</li>
          </ul>
        </div>
      </div>

      {/* Address */}
      <div className="mb-6 flex items-center justify-between"><span>
        <h2 className="font-semibold mb-2">Address</h2>
        <p className="text-gray-300 leading-tight mb-3">
          13, 4th Cross, 5th<br /> Main Road, Vayalur Rd,<br />
          Srinivasa Nagar,<br /> Tiruchirappalli,
          Tamil Nadu <br /> 620017
        </p></span>
        <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
          View on map
        </button>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 pt-4 text-xs flex flex-row sm:flex-row justify-between items-center text-white">
        <p>Copyrights © 2025</p>
        <p>All rights reserved@verora.co</p>
      </div>
    </footer>
  );
};

export default Footer;
