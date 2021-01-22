$(document).ready(function() {
  $('#form-destiny').submit(function(event) {
    event.preventDefault();

    const favoriteColorInput = $('input#favoriteColor').val().toLowerCase();
    const userAgeInput = parseInt($('input#userAge').val());
    const moodInput = $('input#mood').val().toLowerCase();
    const creativityInput = $('input#creativity').val().toLowerCase();

    if (favoriteColorInput === 'green' && userAgeInput < 35 || moodInput === 'yes') {
      $('.learn-js').show();
      $('.learn-ruby').hide();
      $('.learn-python').hide();
    } else if (favoriteColorInput === 'purple' && userAgeInput > 20 || creativityInput === 'no') {
      $('.learn-ruby').show();
      $('.learn-js').hide();
      $('.learn-python').hide();
    } else {
      $('.learn-python').show();
      $('.learn-js').hide();
      $('.learn-ruby').hide();
    }
    $('#form-destiny')[0].reset();
  });

});