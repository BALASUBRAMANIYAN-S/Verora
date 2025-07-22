export default function Input({
  title,
  onchange,
}: {
  title: string;
  onchange?: () => void;
}) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        className="pl-6 border-[#D4D4D4] w-[344px] h-10 border-[1px] rounded-[8px] focus:outline-none"
        placeholder={title}
      />
    </div>
  );
}
