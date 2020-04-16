// business logic - Export function

export function DateInput (month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
}

DateInput.prototype.validateDate = function () {
  if (this.month < 0 || this.month > 11) {
    return false;
  } else if (this.day < 1 || this.day > 31) {
    return false;
  } else if (this.year < 0) {
    return false;
  } else {
    return true;
  }
}

DateInput.prototype.findWeekday = function () {
  let convertDate = new Date(this.year, this.month, this.day);
  return convertDate.getDay();
}

DateInput.prototype.displayDayName = function () {
  let dayConvert = this.findWeekday();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[dayConvert];
}