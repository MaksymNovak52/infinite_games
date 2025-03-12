import { HeaderLink, HeaderList } from "@/components";

export function HeaderContainer() {
  return (
    <header className="w-[1280px] mx-auto h-[60px] flex items-center justify-between py-2 px-4 border border-black">
      <HeaderLink />
      <HeaderList />
    </header>
  );
}
