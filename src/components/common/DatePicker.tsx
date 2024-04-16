import { ko } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date) => void;
  type?: "date" | "year";
}

const DatePicker = ({ selected, onChange, type = "date" }: DatePickerProps) => {
  return (
    <ReactDatePicker
      locale={ko}
      selected={selected}
      onChange={onChange}
      showYearPicker={type == "year"}
      dateFormat={type == "year" ? "yyyy" : "yyyy-MM-dd"}
      yearItemNumber={10}
    />
  );
};

export default DatePicker;
