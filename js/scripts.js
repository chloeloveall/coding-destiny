$(document).ready(function() {
  $('#form-destiny').submit(function(event) {
    const favoriteColorInput = $('input#favoriteColor').val();

    $('.favoriteColor').text(favoriteColorInput);

    event.preventDefault();
  })
}