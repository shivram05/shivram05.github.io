$(function () {
  $("button").click(() => {
    console.log("Hi i am submiting");
    $.post("/addToCart", {
      id: $("#productId").val(),
      // contentType: "application/json; charset=utf-8",
    })
      .done((data) => {
        console.log();
        let element1 = `<div><h2>${data.productName}</h2> <br>
        <p>${data.description}</p> <br>
        <p>${data.price}</p><div>`;
        // let element = $("<h4>", {
        //   text: data.productName,
        //   // text: data.description,
        //   // text: data.price,
        // });
        console.log(data);
        $(".container").prepend(element1);
        // $(".cart card-title").console.log("done");
      })
      .fail((error) => {
        console.log(error);
      });
  });
});
