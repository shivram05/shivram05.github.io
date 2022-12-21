$(function () {
  $("#myQuestion").keypress(function (event) {
    $(this).focus($(this).select());
    var keycode = event.keyCode ? event.keyCode : event.which;
    console.log(keycode);
    if (keycode == "13") {
      $.ajax({
        url: "/8ball",
        data: {
          ans: $("#myQuestion").val(),
        },
        contentType: "application/json; charset=utf-8",
        success: aSuccess,
        fail: aFail,
        complete: aComplete,
      });
    }
  });
  // $("#mybutton").click(loadButton);
  function loadButton() {
    $.ajax({
      url: "/8ball",
      data: {
        ans: $("#myQuestion").val(),
      },
      contentType: "application/json; charset=utf-8",
      success: aSuccess,
      fail: aFail,
      complete: aComplete,
    });
  }
  // $("#myForm").submit(() => {

  // });
  function aSuccess(data) {
    $("#myQuestion").val(data.resData);
    // $("#msg").html(html);
  }
  function aFail(error) {
    console.log(error);
  }
  function aComplete() {
    console.log("complete");
  }
});

// $.get("/8ball", {
//   setTimeout: 5 * 1000,
//   data: {
//     ans: $("#myQuestion").val(),
//   },
//   contentType: "application/json; charset=utf-8",
// })
//   .done((data) => {
//     console.log(data);
//     $("#myQuestion").val(data);
//   })
//   .fail((error) => {
//     console.log(error);
//   });
// });
