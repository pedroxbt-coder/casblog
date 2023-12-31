import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

type Props = {
  dateString: string;
};

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time className="text-lg italic" dateTime={dateString}>
      {capitalizeFirstLetter(format(date, "LLLL d, yyyy", { locale: es }))}
    </time>
  );
};

export default DateFormatter;
