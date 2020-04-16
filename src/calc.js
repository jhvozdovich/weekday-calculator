// business logic - Export function

export function DateInput (month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
}

DateInput.prototype.findWeekday = function () {
  // let convertMonth = this.month - 1;
  // let convertDate = new Date(this.year, convertMonth, this.day);
  // return convertDate.getDay();
}