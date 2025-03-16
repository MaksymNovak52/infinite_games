import { FooterLink } from "../icon";

export function BottomBlock() {
  return (
    <div className="container mx-auto py-6 px-6  flex justify-between  ">
      <FooterLink />
      <div className="flex flex-row justify-between w-[50%] pt-2 font-inter">
        <p className="text-gray-400 text-sm">Bittensor Subnet 6</p>
        <p className="text-gray-400 text-sm">Powered byiga© 2025</p>
      </div>
    </div>
  );
}
