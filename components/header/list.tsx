import { HEADER_ROUTES } from "@/constants";

export function HeaderList() {
  return (
    <ul className="flex items-center gap-4 ">
      {HEADER_ROUTES.map((route) => (
        <li
          key={route}
          className="text-baseTitle uppercase  leading-3 tracking-[1px] font-medium text-xs cursor-pointer transition-colors hover:text-[#4D5ED8] "
        >
          {route}
        </li>
      ))}
    </ul>
  );
}
