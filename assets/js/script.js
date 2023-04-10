// set the global variables
var todaysDate = document.getElementById("currentDay");
var taskDescription = $(".description");

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

function militaryToStandardTime(milTime){
  if(milTime < 12) {
    return milTime + "AM";
  } else if (milTime === 12) {
    return milTime + "PM";
  } else {
    return (milTime - 12) + "PM";
  }
 
}

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
  $(document).ready(function(){
    $(".btn").click(function(){
      console.log("click")
    })
  })
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // Get the current hour in 24-hour time
  function currentHour() {
    now = dayjs().format("H");
    console.log("The current hour is: " + now)
  }
  currentHour()

 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
});



//   // select form element by its `name` attribute and get its value
//   taskDescription = $('input[name="task"]').val();
//   console.log(taskDescription.val())

// }
// // Create a submit event listener on the form element
// taskDescription.on('submit', handleFormSubmit);




