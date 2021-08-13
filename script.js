var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();

var output = 
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day
    // + '/' + d.getFullYear();

$("#date").text(output);

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
  $("#guestCheck").addClass("swing");
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

$("#receiptTrigger").click(function () {
  checkOut();
  $(".receipt").addClass("receipt-swing");
});

$("#guestCheckReset").click(function () {
  $("#guestCheck").removeClass("swing");
  $("#guestCheckReset span").css("color", "white");
  $(".alfa").removeClass("one-toss");
  $(".bravo").removeClass("two-toss");
  $(".charlie").removeClass("three-toss");
  $(".delta").removeClass("four-toss");
  $(".echo").removeClass("five-toss");
  $(".receipt").removeClass("receipt-swing");
  window.scrollTo(0, 0);
});

