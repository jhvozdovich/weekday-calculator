import { Date } from "./../src/calc.js";

describe ("Date", () => {
  test("should correctly create a date object with a month, day, and year attribute", () => {
    var date = new Date(11, 5, 1990);
    expect(date.month).toEqual(11);
    expect(date.day).toEqual(5);
    expect(date.year).toEqual(1990);
  })
})