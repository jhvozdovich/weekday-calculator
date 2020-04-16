import { DateInput } from "./../src/calc.js";
import { Date } from "./../src/calc.js";

describe ("DateInput", () => {
  test("should correctly create a date object with a month, day, and year attribute", () => {
    let date = new DateInput(11, 5, 1990);
    expect(date.month).toEqual(11);
    expect(date.day).toEqual(5);
    expect(date.year).toEqual(1990);
  });
});

describe ("Date", () => {
  test("should correctly convert Date Input info to native Date object", () => {
    let date = new DateInput(11, 5, 1990);
    let convertMonth = date.month - 1;
    let newDate = new Date (date.year, convertMonth, date.day);
    expect(newDate.month).toEqual(10);
    expect(newDate.day).toEqual(5);
    expect(newDate.year).toEqual(1990);
  })
})

// var d = Date.parse("March 21, 2012");

// let birthday = new Date(1995, 11, 17) 