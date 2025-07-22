import { FaChevronLeft } from "react-icons/fa";


export default function BackButton({
  title,
  onClick,
  
 
}: {
  title:string;
  onClick?: () => void;
}) {

    return (
    <div className="mt-28 px-4 flex flex-row items-center relative">
            <div className="rounded-[100%] ml- p-2 text-white items-center flex justify-center bg-[#E8E8E8] absolute ">
              <FaChevronLeft/>
            </div>
            <p className="mx-auto font-[600]">{title}</p>
        </div>
    );

}
