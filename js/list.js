// $(document).ready(function() {});

$(() => {
  let list = $("ul#list");
  //console.log(list);

  let items = $(".list-item");
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }

  for (let item of items) {
    console.log(item);
  }
});
