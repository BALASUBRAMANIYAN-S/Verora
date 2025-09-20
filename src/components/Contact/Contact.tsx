import BackButton from "../common/BackButton";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/Teaxtarea";
import Request from "../home/Request";

function Contact() {
  return (
    <div className="">
     
      <BackButton title={"Contact Us"} />
      <div className="mt-11 flex flex-col gap-4">
        <Input title={"Your Name"} />
        <Input title={"Your Email"} />
        <TextArea title="Enter your Message..." rows={5} />
        <span className="flex justify-center mt-4">
          <Button title={"Submit"} varient={"card-btn"} />
        </span>
      </div>
      <div className="ml-6 border-[#D4D4D4] border-[2px] rounded-[8px] p-3 mr-6 mt-8">
        <p className="pt-1 font-medium">Shop Location</p>
        <p className="text-[12px] ">
          13, 4th Cross, 5th Main Road, Vayalur Rd, Srinivasa Nagar,
          Tiruchirappalli, Tamil Nadu 620017
        </p>

        <ul className="flex flex-col gap-3 mt-6">
          <li>Customer Care</li>
          <li>Monday - Sunday </li>
          <li>11:00 AM - 9:00 PM</li>
          <li>Ph: +91 64789 88903</li>
        </ul>
      </div>
      <Request />
  
    </div>
  );
}

export default Contact;
