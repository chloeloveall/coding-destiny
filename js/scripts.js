$(document).ready(function() {
  $('#form-destiny').submit(function(event) {
    event.preventDefault();
    const favoriteColorInput = $('input#favoriteColor').val();

    $('.favoriteColor').text(favoriteColorInput);

  });
});