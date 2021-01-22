$(document).ready(function() {
  $('#form-destiny').submit(function(event) {
    event.preventDefault();

    const favoriteColorInput = $('input#favoriteColor').val();
    const userAgeInput = parseInt($('input#userAge').val());

    if (favoriteColorInput === 'green' && userAgeInput < 35) {
      $('.learn-js').show();
      $('.learn-ruby').hide();
      $('.learn-python').hide();
    } else if (favoriteColorInput === 'purple' && userAgeInput > 20) {
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

  // $('button.resetBtn').submit(function(event) {
  //   $('.learn-js').hide();
  // })

});