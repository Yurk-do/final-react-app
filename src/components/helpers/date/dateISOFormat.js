const dateISOFormat = (dateTimeISO) => {
  const date = new Date(dateTimeISO);
  let hour = date.getHours();
  let minutes = date.getMinutes();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const dateFormat = year + "-" + month + "-" + dt + " " + hour + ":" + minutes;
  return dateFormat;
};

export default dateISOFormat;
