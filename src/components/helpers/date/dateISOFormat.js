const dateISOFormat = (dateTimeISO) => {
  const date = new Date(dateTimeISO);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  const dateFormat = year + "-" + month + "-" + dt + " " + hour + ":" + minutes;
  return dateFormat;
};

export default dateISOFormat;
