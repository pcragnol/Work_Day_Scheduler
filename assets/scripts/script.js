setInterval(function() {
  $('#currentDay').text(moment().format('LLLL'));
}, 1000);

$('textarea').each(function() {
  $(this).addClass('future');
});