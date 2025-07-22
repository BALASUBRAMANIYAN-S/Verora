export default function Button({
  title,
  onClick,
  varient,
}: {
  title: string;
  onClick?: () => void;
  varient: "card-btn" | "default" | "Hero-btn" | "payment";
}) {
  if (varient == "card-btn")
    return (
      <button onClick={onClick} className="bg-[#865CBD] rounded-lg py-1 px-5">
        <p className="text-white ">{title}</p>
      </button>
    );

  if (varient == "Hero-btn")
    return (
      <button onClick={onClick} className="ml-1 mb-4 border-[2px] rounded-md border-white">
        <p className="text-white m-2">{title}</p>
      </button>
    );
  if (varient == "payment")
    return (
  <div className="flex justify-center">
      <button onClick={onClick} className="flex h-[40px] w-[398px] items-center justify-center  rounded-lg bg-[#090909] text-white">
        {title}
      </button></div>
    );
  return (
    <button onClick={onClick} className="rounded-3xl bg-transparent border-2 border-[#865CBD] text-[#865CBD] p-2">
      <p className="pl-4 pr-4">{title}</p>
    </button>
  );
}
