$(document).ready(function() {

  let container1 = document.getElementById('container');
  console.log(container1);

  let container2 = $("#container");
  console.log(container2);

  /*container2.css({
    backgroundColor: "red",
    borderColor: "blue",
    borderWidth: 5,
    borderStyle: "dashed"
  });*/

  $("#container").addClass('container');
  $("#container")
    //.addClass('container-active')
    //.removeClass('container')
    .text("Some text")
    .html(`<span>Other text</span>
<span>Other text</span>
<span>Other text</span>`);

  $("<a href='https://google.com'>link</a>").appendTo("body");

  container2.on('click', (event) => {
    //console.log(event);
    //alert("!!!");
    /*if (container2.hasClass('container')) {
      container2.addClass('container-active').removeClass('container');
    } else {
      container2.addClass('container').removeClass('container-active');
    }*/
    container2
      .toggleClass('container')
      .toggleClass('container-active');
  });

  container2.trigger('click');

  container2.draggable();

});
