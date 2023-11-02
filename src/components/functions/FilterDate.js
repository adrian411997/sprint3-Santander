function parseDate(date) {
  const [year, month, day] = date.split("-");
  return new Date(year, month - 1, day);
}
function filterDate(array, pastTime) {
  let newDataToWork = [];
  array.forEach((elem) => {
    let elemmDate = parseDate(elem.date);
    let thisDate = new Date();
    if (pastTime) {
      if (elemmDate < thisDate) {
        newDataToWork.push(elem);
      }
    } else {
      if (elemmDate > thisDate) {
        newDataToWork.push(elem);
      }
    }
  });
  return newDataToWork;
}
export default filterDate;
