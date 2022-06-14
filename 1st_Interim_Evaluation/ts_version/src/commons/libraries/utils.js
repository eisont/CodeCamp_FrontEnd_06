export const getDate = (date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDate();
  const tt = newdate.getHours();
  const ss = newdate.getMinutes();
  return `${yyyy}-${mm}-${dd} ${tt}:${ss}`;
};
