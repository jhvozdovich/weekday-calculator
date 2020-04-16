// UI Logic - Import 
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { DateInput } from "./../src/calc.js";

$(document).ready(function() {
  $("#date-form").submit(function(event){
    event.preventDefault();
    let month = parseInt($("#month-input").val());
    let day = parseInt($("#day-input").val());
    let year = parseInt($("#year-input").val());

    let newDate = new DateInput(month, day, year);

    if (newDate.validateDate()) {
      $("#results").text(newDate.displayDayName());
    } else {
      alert("Please enter a valid date!");
    }
  });
});

