var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();

var output =
  (("" + month).length < 2 ? "0" : "") +
  month +
  "/" +
  (("" + day).length < 2 ? "0" : "") +
  day;

var year = d.getFullYear();

$("#date").text(output);
$("#year").text(year);
// function writeCount(passForm) {
//   var read = new XMLHttpsRequest();
//       read.open('GET', 'count.txt', false);
//       read.send();

//   var count = parseInt(read.responseText);
//   count = count + 1;

//   s.writeline(count);
//   s.Close();
// }

//window.onload = writeCount;

function checkOut() {
  $("#guestCheckWrap").addClass("swing");
  $("#candyTrigger").addClass("swing-2");
  $("#guestCheckReset span").css("color", "navy");
}

$("#one").click(function () {
  checkOut();
  $(".alfa").addClass("one-toss");
});

$("#two").click(function () {
  checkOut();
  $(".bravo").addClass("two-toss");
});

$("#three").click(function () {
  checkOut();
  $(".charlie").addClass("three-toss");
});

$("#four").click(function () {
  checkOut();
  $(".delta").addClass("four-toss");
});

$("#five").click(function () {
  checkOut();
  $(".echo").addClass("five-toss");
});

$("#six").click(function () {
  checkOut();
  $(".foxtrot").addClass("six-toss");
});

$("#candyTrigger").click(function () {
  $(".guest-check-container").toggleClass("flip");
  $(".add-on").toggleClass("spin");
});

$("#receiptTrigger").click(function () {
  checkOut();
  $(".receipt").addClass("receipt-swing");
});

// resets everything when the menu button is clicked
$("#guestCheckReset").click(function () {
  $("#guestCheckWrap").removeClass("swing");
  $("#candyTrigger").removeClass("swing-2");
  $("#guestCheckReset span").css("color", "#fff0");
  $(".alfa").removeClass("one-toss");
  $(".bravo").removeClass("two-toss");
  $(".charlie").removeClass("three-toss");
  $(".delta").removeClass("four-toss");
  $(".echo").removeClass("five-toss");
  $(".foxtrot").removeClass("six-toss");
  $(".receipt").removeClass("receipt-swing");

  window.scrollTo(0, 0);
});
