$( document ).ready(function() {
  var temp;
  var right = 0;
  var wrong = 0;

  temp = Math.floor(Math.random() * 101);
  $('#number').html(temp);

  $("#fizz").on('click touch', function() {
    checkFizz();
    nextNumber();
  });

  $("#buzz").on('click touch', function() {
    checkBuzz();
    nextNumber();
  });

  $("#fizzbuzz").on('click touch', function() {
    checkFizzBuzz();
    nextNumber();
  });

  $("#none").on('click touch', function() {
    checkNone();
    nextNumber();
  });


  checkFizz = function() {
      if (temp%3 == 0 && temp%5 != 0) {
        $('#number').html("Right! It's FIZZ!");
        right++;
        $('#right').html(right);
      } else {
        $('#number').html("Sorry.");
        wrong++;
        $('#wrong').html(wrong);
      }
      // nextNumber();
  }

  checkBuzz = function() {
      if (temp%3 != 0 && temp%5 == 0) {
        $('#number').html("Right! It's BUZZ!");
        right++;
        $('#right').html(right);
      } else {
        $('#number').html("Sorry.");
        wrong++;
        $('#wrong').html(wrong);
      }
  }

  checkFizzBuzz = function() {
      if (temp%3 == 0 && temp%5 == 0) {
        $('#number').html("Right! It's FIZZBUZZ!");
        right++;
        $('#right').html(right);
      } else {
        $('#number').html("Sorry.");
        wrong++;
        $('#wrong').html(wrong);
      }
  }

  checkNone = function() {
    if (temp%3 != 0 && temp%5 != 0) {
      $('#number').html("Right! It's none of these.");
      right++;
      $('#right').html(right);
    } else {
      $('#number').html("Sorry.");
      wrong++;
      $('#wrong').html(wrong);
    }
  }

  nextNumber = function() {
    temp = Math.floor(Math.random() * 101);
    $('#number').html(temp);
  }

});
