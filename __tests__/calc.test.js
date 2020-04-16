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

describe("ValidateDate", () => {
  test("should validate if a valid month is entered", () => {
    let date = new DateInput(14, 5, 2000);
    expect(date.validateDate()).toEqual(false)
  })

  test("should validate if a valid day is entered", () => {
    let date = new DateInput(10, 65, 2000);
    expect(date.validateDate()).toEqual(false);
  })

  test("should validate if a valid year is entered", () => {
    let date = new DateInput(10, 12, -2);
    expect(date.validateDate()).toEqual(false);
  })

  test("should validate if a valid date is entered", () => {
    let date = new DateInput(5, 17, 2002);
    expect(date.validateDate()).toEqual(true);
  })
})  

describe("FindWeekday", () => {
  test("should correctly output the day of the week for a date entry", () => {
    let date = new DateInput(11, 5, 1990);
    expect(date.findWeekday()).toEqual(1);
  });
});

describe("displayDayName", () => {
  test("should correctly display the day outcome as its corresponding day of the week string", () => {
  let date = new DateInput(11, 6, 1990);
  expect(date.displayDayName()).toEqual("Tuesday");
  });
});


