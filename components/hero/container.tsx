import Image from "next/image";
import { DigitEffect } from "./index";

export function HeroContainer() {
  return (
    <section
      className="h-[600px] mt-10 flex flex-col items-center justify-center bg-[#F5F5F5] px-6 py-12"
      style={{
        backgroundImage: "url('./bg.png')",
      }}
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-10 -left-20 -right-20 -bottom-20  rounded-lg z-0"></div>
        <h3 className="uppercase text-sm text-center pb-4 text-[#1F1F1F] font-medium">
          Infinite games accuracy
        </h3>
        <div className="text-8xl font-bold relative ">
          <DigitEffect value="98.01" />
        </div>
        <button className="uppercase text-sm text-center mt-4 text-white bg-[#1F1F1F] w-[246px] h-[40px] rounded-md flex flex-row items-center justify-center z-[20]  font-bold">
          contribute your model
          <Image src="/icon/model.png" alt="arrow" width={35} height={37} />
        </button>
        <div className="absolute bottom-[80px] right-[0px] transform  z-20 -rotate-[10deg]">
          <div className="bg-blue-600 text-white text-sm font-bold rounded flex justify-center  items-center w-[48px] h-[26px]">
            TAO
          </div>
        </div>
      </div>
    </section>
  );
}
