import { BottomBlock } from "./bottom-block";
import { TopBlock } from "./top-block";

export const FooterContainer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] flex justify-center text-white mt-10">
      <div className="w-[1388px] mx-auto ">
        <TopBlock />
        <BottomBlock />
      </div>
    </footer>
  );
};
