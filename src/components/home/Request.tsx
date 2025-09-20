import Button from "../common/Button";

function Request() {
  return (
    <div className="mt-9 relative">
      <img className="w-full blur-[1px] " src="/assets/requst.png" alt="" />
      <div className="flex flex-col items-center justify-center absolute bottom-[10%] mx-auto left-0 right-0">
        <Button title={"Want something unique?"} varient={"Hero-btn"} />
        <Button title={"Request a Quote"} varient={"card-btn"} />
      </div>
    </div>
  );
}

export default Request;
