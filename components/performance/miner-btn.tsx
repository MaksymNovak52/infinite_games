export function MinerBtn({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-center mt-10">
      <button
        className="
            w-[203.48px] h-[38px] flex-shrink-0 rounded-[5px] 
            bg-[#4D5ED8] text-[#F5F5F5] text-center 
            font-['Ciutadella_TRIAL'] text-[14px] font-semibold 
            leading-[14px] tracking-[1.4px] uppercase
            relative overflow-hidden
            transition-all duration-300 ease-out
            hover:shadow-[0_0_15px_rgba(77,94,216,0.6)]
            hover:translate-y-[-2px]
            active:translate-y-[1px]
            active:shadow-[0_0_10px_rgba(77,94,216,0.4)]
            focus:outline-none focus:ring-2 focus:ring-[#8493E9] focus:ring-opacity-50
          "
      >
        <span className="relative z-10">{title}</span>
        <span
          className="
              absolute inset-0 w-0 bg-[#3849B8] 
              transition-all duration-300 ease-out
              group-hover:w-full left-0 top-0
            "
        ></span>
        <span
          className="
              absolute top-0 left-0 w-full h-full 
              bg-gradient-to-r from-transparent via-[#8493E9]/20 to-transparent
              -translate-x-full animate-shimmer
            "
        ></span>
      </button>
    </div>
  );
}
