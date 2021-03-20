// uses moment to track date and time
$(document).ready(function () {
  var currentDay = $("#currentDay");
  currentDay.text(moment().format("dddd, MMMM Do"));
  // this function takes the date and it to the ID's in the HTML
  const hour = new Date().getHours();
  let twoPm = $("");
  //  starting at 2PM
  const twoPmInt = $("#14").attr("id");

  twoPm.addClass("present");

  // on click saves button into local storage event
  $(".btn").on("click", function () {
    var inputValue = $(this).siblings(".description").val();
    console.log(inputValue);
    var id = $(this).siblings(".hour").attr("id");
    console.log(id);
    localStorage.setItem(id, inputValue);
  });

  //   pairs id with key values in console.
  function getLocalStorage() {
    $(".time-block").each(function () {
      var id = $(this).children(".hour").attr("id");
      $(".description").val(localStorage.getItem(id));
    });
  }
  getLocalStorage();
});
