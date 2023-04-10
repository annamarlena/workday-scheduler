// set the global variables
var todaysDate = document.getElementById("currentDay");
var taskDescription = document.querySelector(".description");
var saveBtn = document.querySelector(".saveBtn");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Code to display the current date in the header of the page.
  function currentDate() {
      var today = dayjs().format("dddd, MMMM D, YYYY");
      todaysDate.textContent = today;
  }
  currentDate()

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // $(document).ready(function(){
  //   $(".btn").click(function(){
  //     console.log("click")
  //   })
  // })
   
  // Get the current hour in 24-hour time
  function currentHour() {
    now = dayjs().format("H");
    console.log("The current hour is: " + now)
  }
  currentHour()

  // Apply the past, present, or future class to each div based on current time
  function getClassName(milTime){
    var now = parseInt( dayjs().format("H") );
    if( now > milTime ) {
      return "past"
    } else if ( now < milTime ){
      return "future"
    } else {
      return "present"
    }
  }

  // Add the time in 12-hour time to column 1 of each row
  function militaryToStandardTime(milTime){
    if(milTime < 12) {
      return milTime + "AM";
    } else if (milTime === 12) {
      return milTime + "PM";
    } else {
      return (milTime - 12) + "PM";
    }
  }

  // Create the div rows and columns dynamically
  for( var i = 9; i<= 17; i++ ){
    var div = `<div class='row'>
    <div class='col-2 col-md-1 hour text-center py-3'>${militaryToStandardTime(i)}</div>
    <textarea class='col-8 col-md-10 description ${getClassName(i)}' rows='3'></textarea>
    <button class='btn saveBtn col-2 col-md-1' aria-label='save'>
      <i class='fas fa-save' aria-hidden='true'></i>
    </button>
  </div>`
    $( ".container-lg" ).append(div)
  }
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // $("button").on("click", function(event) {
  //   console.log("new click")
  //   event.preventDefault();
  //   document.getElementsByClassName("description").textContent = taskDescription.value;
  //   console.log("Saved text: " + taskDescription)
  // });
  
  // Create a submit event listener on the form element
  //Adds an event listener for the "button"
// $("button").on("click", function (event) { 
// event.preventDefault();
// console.log("hello")
// //Sets item to the value of the text area for the appropriate time block 
//   for ( i = 0; i < 12; i++) {
//       localStorage.setItem('textarea' + String(i + 1), $("textarea")[i].value) 
//   }
// });
  
});








