$("#currentDay").text(moment().format("LLLL"));

setInterval(function () {
  $("#currentDay").text(moment().format("LLLL"));
}, 1000);

$("textarea").each(function () {
  if ($(this).data("hour") < moment().format("HH")) {
    $(this).addClass("past");
  } else if ($(this).data("hour") > moment().format("HH")) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
});

$(".saveBtn").on("click", function (event) {
  // localStorage.setItem(`${$(event.target).parent("tr").children("th").text()} event`, $(event.target).parent("tr").children("td").eq(0).children().val());
  localStorage.setItem(`${$(event.target).parent("tr").children("td").eq(0).children().data("hour")} event`, $(event.target).parent("tr").children("td").eq(0).children().val());
});

$("textarea").each(function () {
  // $(this).val(localStorage.getItem(`${$(this).parent("tr").children("th").text()} event`));
  $(this).val(localStorage.getItem(`${$(this).data("hour")} event`));
});