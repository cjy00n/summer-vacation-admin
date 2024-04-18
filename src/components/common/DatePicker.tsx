import { ko } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date) => void;
  type?: "date" | "year" | "month";
  size?: "default" | "short";
}

const DatePicker = ({
  selected,
  onChange,
  type = "date",
  size = "default",
}: DatePickerProps) => {
  return (
    <ReactDatePicker
      className={size === "short" ? "w-[8vw]" : "w-middle"}
      locale={ko}
      selected={selected}
      onChange={onChange}
      showYearPicker={type == "year"}
      showMonthYearPicker={type === "month"}
      dateFormat={`${
        type == "year" ? "yyyy" : type == "month" ? "MM" : "yyyy-MM-dd"
      }`}
      yearItemNumber={10}
    />
  );
};

export default DatePicker;
