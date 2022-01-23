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

console.log($("#test").parent().parent().data("hour"));

$(".saveBtn").on("click", function (event) {
  console.log($(event.target).parent("tr").children("th").text());
  console.log($(event.target).parent("tr").children("td").eq(0).children().text());
  localStorage.setItem(`${$(event.target).parent("tr").children("th").text()} event`, $(event.target).parent("tr").children("td").eq(0).children().val());
});

// $("button").each(function () {
//   $(this).addEventListener("click", function () {
//     console.log("test");
//   });
// });

// $("button").each($(this).addEventListener("click", function () {
//   console.log("test");
// }));

// $("button").each(addEventListener("click", console.log("test")));