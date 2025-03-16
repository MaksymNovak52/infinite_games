"use client";
import { DateRangePickerProps } from "@/type";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  dateRange,
  onChange,
}) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleDateChange = (update: [Date | null, Date | null]): void => {
    onChange(update);
    if (update[0] && update[1]) {
      setShowCalendar(false);
    }
  };

  const formatDateRange = (): string => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays <= 7) {
        return `${diffDays} DAYS - TODAY`;
      }
      return `${format(startDate, "dd MMM")} - ${format(endDate, "dd MMM")}`;
    }
    return "SELECT DATES";
  };

  return (
    <div className="flex-1" ref={calendarRef}>
      <div className="text-xs uppercase mb-2 font-inter">DATE RANGE</div>
      <div className="flex bg-[#FFF]/10 flex-row items-center">
        <div
          className="border border-[#222] rounded text-xs w-full px-3 py-2 flex items-center cursor-pointer"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {formatDateRange()}
        </div>
        <button
          className="border border-[#FFFFFF]/20 rounded px-1 flex items-center justify-center py-1 mr-1"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <Calendar size={16} />
        </button>
      </div>

      {showCalendar && (
        <div className="absolute mt-1 z-50">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            className="bg-[#FFF] border border-[#333] rounded"
          />
        </div>
      )}
    </div>
  );
};
