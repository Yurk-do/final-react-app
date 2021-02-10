export const dateCommentFormat = (dateTime) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateTime);
  const dateFormat = date.toLocaleString("us-US", options);
  return dateFormat;
};
