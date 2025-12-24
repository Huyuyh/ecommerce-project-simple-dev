import dayjs from "dayjs";

export function formatDay(timeMs) {
  return dayjs(timeMs).format('dddd, MMMM d');
}