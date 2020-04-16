// UI Logic - Import 
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";




//refactor for individual form fields
$(document).ready(function() {
  $("#date-form").submit(function(event){
    event.preventDefault();
    let date = $("#date-input").val();
    console.log(date);
    console.log(typeof(date));
  });
});

