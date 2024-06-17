import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi";
export function extractTime(dateString: any) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

function padZero(number: any) {
  return number.toString().padStart(2, "0");
}

export function fromNow(date: Date) {
  dayjs.extend(relativeTime);
  dayjs.locale("vi");
  return dayjs(date).fromNow();
}
