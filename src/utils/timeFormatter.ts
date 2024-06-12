const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatMinutesToTimeStr(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = hours > 0 ? `${hours}h` : "";
  const minutesString = remainingMinutes > 0 ? `${remainingMinutes}mins` : "";

  return `${hoursString}${minutesString ? " " : ""}${minutesString}`;
}

export function dateStrToTimeStr(dateStr: string) {
  // Create a new Date object from the epoch timestamp
  const date = new Date(dateStr);

  return `${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}`;
}
