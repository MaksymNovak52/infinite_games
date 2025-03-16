import { BottomBlock } from "./bottom-block";
import { TopBlock } from "./top-block";

export const FooterContainer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white mt-10">
      <TopBlock />
      <BottomBlock />
    </footer>
  );
};
