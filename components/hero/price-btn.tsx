export function PriceButton({ title }: { title: string }) {
  return (
    <div className="bg-[#E4E6F2] border border-[#4D5ED8] text-[#4D5ED8]  w-[110px] h-[26px] rounded-md flex  flex-row justify-center items-center">
      <span className=" text-blue-600  text-sm">▲</span>
      <span className=" font-medium text-sm leading-4 uppercase">
        $ {title}
      </span>
    </div>
  );
}
