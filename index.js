var addDays = require("date-fns/addDays");
const days = (x) => {
  let date = addDays(new Date(2020, 7, 22), x);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
module.exports = days;
