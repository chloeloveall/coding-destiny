$(document).ready(function() {
  $('#form-destiny').submit(function(event) {
    event.preventDefault();
    const favoriteColorInput = $('input#favoriteColor').val();
    const userAgeInput = parseInt($('input#userAge').val());

    if (favoriteColorInput === 'green' && userAgeInput < 35) {
      $('.learn-js').show();
    } else if (favoriteColorInput === 'purple' && userAgeInput > 20) {
      $('.learn-ruby').show();
    } else {
      $('.learn-python').show();
    }

  });
});