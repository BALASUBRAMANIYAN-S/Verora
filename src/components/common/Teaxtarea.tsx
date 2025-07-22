export default function TextArea({
  title,
  rows = 4,
  onchange,
}: {
  title: string;
  rows?: number;
  onchange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="flex justify-center">
      <textarea
        rows={rows}
        className="w-[344px] border-[1px] border-[#D4D4D4] rounded-[8px] p-3 resize-none"
        placeholder={title}
        onChange={onchange}
      />
    </div>
  );
}
