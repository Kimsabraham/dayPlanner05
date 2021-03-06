// uses moment to track date and time
$(document).ready(function () {
  var currentDay = $("#currentDay");
  currentDay.text(moment().format("dddd, MMMM Do"));
  // this function takes the date and it to the ID's in the HTML

  // on click saves button into local storage event
  $(".btn").on("click", function () {
    var inputValue = $(this).siblings(".description").val();
    console.log(inputValue);
    var id = $(this).siblings(".hour").attr("id");
    console.log(id);
    localStorage.setItem(id, inputValue);
  });

  //   stores and calls users info into local storage
  function getLocalStorage() {
    var currentHour = moment().hour();
    console.log(currentHour);
    $(".time-block").each(function () {
      var id = $(this).children(".hour").attr("id");
      // color codes based on hour
      $(this).children(".description").val(localStorage.getItem(id));
      if (currentHour > id) {
        $(this).addClass("past");
      } else if (currentHour < id) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
  }
  getLocalStorage();
});
