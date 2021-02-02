const DateFormat = ({ dateTime }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(dateTime);
  const dateFormat = date.toLocaleString("us-US", options);
  return dateFormat;
};

export default DateFormat;
