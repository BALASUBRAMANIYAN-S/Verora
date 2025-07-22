import {
  FaCubes,
  FaTruck,
  FaCut,
  FaCheckCircle,
  FaShapes,
} from "react-icons/fa";

function Our() {
  return (
    <div className="bg-[#F2EDF8]  mt-14 flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-xl font-semibold mt-12 text-gray-800 mb-10">
        Verora Embroidery Workflow
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#e6d6f2] rounded-3xl p-6 flex items-center space-x-4 w-auto">
          <FaShapes className="text-3xl text-[#4b3f72]" />
          <p className="font-medium text-gray-800">Pattern Making</p>
        </div>

        <div className="bg-[#e6d6f2] rounded-3xl p-6 flex items-center space-x-4 w-auto">
          <FaCubes className="text-3xl text-[#4b3f72]" />
          <p className="font-medium text-gray-800">Pre - Sample</p>
        </div>

        <div className="bg-[#e6d6f2] rounded-3xl p-6 flex items-center space-x-4 w-auto">
          <FaCut className="text-3xl text-[#4b3f72]" />
          <p className="font-medium text-gray-800">
            Cutting &<br />
            Embroidery
          </p>
        </div>

        <div className="bg-[#e6d6f2] rounded-3xl p-6 h-24 flex items-center space-x-4 w-auto  ">
          <FaCheckCircle className="text-3xl text-green-600" />
          <p className="font-medium text-gray-800">
            Sewing &<br />
            Quality Check
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-[#e6d6f2] rounded-3xl p-6 flex items-center space-x-4 w-auto h-24">
          <FaTruck className="text-3xl text-[#4b3f72]" />
          <p className="font-medium text-gray-800">Packing & Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default Our;
