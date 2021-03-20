$(document).ready(function () {
  var currentDay = $("#currentDay");
  currentDay.text(moment().format("dddd, MMMM Do"));

  $(".btn").on("click", function () {
    var inputValue = $(this).siblings(".description").val();
    console.log(inputValue);
    var id = $(this).siblings(".hour").attr("id");
    console.log(id);
    localStorage.setItem(id, inputValue);
  });

  function getLocalStorage() {
    $(".time-block").each(function () {
      var id = $(this).children(".hour").attr("id");
      $(".description").val(localStorage.getItem(id));
    });
  }
  getLocalStorage();
});
