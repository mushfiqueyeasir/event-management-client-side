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
  const date = new Date(dateString);
  const timezoneOffsetMinutes = date.getTimezoneOffset();
  const timezoneOffsetHours = timezoneOffsetMinutes / 60;
  return timezoneOffsetHours < 0
    ? ("+", timezoneOffsetHours)
    : timezoneOffsetHours;
};
