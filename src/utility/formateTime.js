export const formateDate = (isoDate) => {
  const date = new Date(isoDate);
  return date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
    .replaceAll("/", "-");
};

export const timeZone = (dateString) => {
  const inputDateTime = new Date(dateString);
  const localDateTimeString = inputDateTime.toLocaleString().split(",");
  let date = localDateTimeString[0];
  let tempTime = localDateTimeString[1];
  let time = tempTime.slice(tempTime.length - 2);

  return [date, tempTime.slice(0, tempTime.length - 6) + " " + time];
};

export const GMTFinder = (date) => {
  const inputDateTime = new Date(date);
  const gmtOffset = inputDateTime.getTimezoneOffset();
  const gmtOffsetHours = Math.abs(Math.floor(gmtOffset / 60));
  const gmtOffsetMinutes = Math.abs(gmtOffset % 60);
  const gmtString = `GMT${gmtOffset < 0 ? "+" : "-"}${gmtOffsetHours
    .toString()
    .padStart(2, "0")}:${gmtOffsetMinutes.toString().padStart(2, "0")}`;

  return gmtString;
};
