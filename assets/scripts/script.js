// Displays current time to page
function displayTime() {
  $("#currentDay").text(moment().format("LLLL"));
}

// Applies color to each textarea depending on relation to current time
function setColor() {
  $("textarea").each(function () {
    if ($(this).data("hour") < moment().format("HH")) {
      $(this).addClass("past");
    } else if ($(this).data("hour") > moment().format("HH")) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

// Calls displayTime and setColor functions when page is loaded
displayTime();
setColor();

// Continues to call displayTime and setColor functions every second
setInterval(function () {
  displayTime();
  setColor();
}, 1000);

// Saves textarea content to local storage when corresponding save button is clicked
$(".saveBtn").on("click", function (event) {
  localStorage.setItem(`${$(event.target).data("hour")} event`, $(event.target).prev().children().val());
});

// Populates each textarea with correspoinding local storage data when page is loaded
$("textarea").each(function () {
  $(this).val(localStorage.getItem(`${$(this).data("hour")} event`));
});
