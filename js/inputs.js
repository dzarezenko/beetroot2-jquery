$(() => {

  $('#sendBtn').on('click', () => {

    for (let input of $('input.name')) {
      //console.log($(input));
      let name = $(input).val();
      if (name.trim()) {
        alert(name.trim()); // send name
        break;
      }
    }

  });

  $('input.name').on('keyup', (event) => {
    $('input.name').val(
      $(event.target).val()
    );
  })

});
