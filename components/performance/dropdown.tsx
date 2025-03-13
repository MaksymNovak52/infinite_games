"use client";

import { DropdownProps } from "@/type";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
export function Dropdown<T extends string>({
  label,
  value,
  options,
  onChange,
  isMulti = false,
  selectedValues = [],
}: DropdownProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const getDisplayText = (): string => {
    if (!isMulti) return value;

    if (selectedValues.includes("ALL" as T)) return "ALL";
    if (selectedValues.length <= 2) return selectedValues.join(", ");
    return `${selectedValues.length} SELECTED`;
  };

  return (
    <div className="flex-1 relative" ref={dropdownRef}>
      <div className="text-xs uppercase mb-2">{label}</div>
      <div
        className="bg-[#FFF]/10 border border-[#222] rounded text-xs w-full px-3 py-2 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getDisplayText()}</span>
        <ChevronDown size={14} />
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-[#FFF]/10 border border-[#222] rounded z-40">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 text-xs hover:bg-[#222] cursor-pointer flex justify-between items-center"
              onClick={() => {
                onChange(option);
                if (!isMulti) {
                  setIsOpen(false);
                }
              }}
            >
              <span>{option}</span>
              {isMulti && selectedValues.includes(option) && (
                <Check size={14} className="text-green-500" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
