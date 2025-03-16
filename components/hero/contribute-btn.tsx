import Image from "next/image";

export function ContributeButton() {
  return (
    <button
      className="
        uppercase text-sm text-center mt-4 text-white 
        bg-[#1F1F1F] w-[246px] h-[40px] rounded-md 
        flex flex-row items-center justify-center z-[20] font-bold
        transition-transform duration-200 ease-out
        hover:-translate-y-1
        active:translate-y-0
      "
    >
      <span className="relative flex items-center justify-center gap-2">
        contribute your model
        <Image src="/icon/model.png" alt="arrow" width={35} height={37} />
      </span>
    </button>
  );
}
