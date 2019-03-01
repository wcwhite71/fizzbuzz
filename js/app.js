$( document ).ready(function() {
  var arr = [];
  for (var x=0; x <= 100; x++) {
    arr.push(x);
  }

  $('#number').html(arr.shift());

  // while (arr.length > 0) {
  //
  // }

  $("#fizz").on('click touch', function() {
    checkFizz();
  });

  $("#buzz").on('click touch', function() {
    checkBuzz();
  });

  $("#fizzbuzz").on('click touch', function() {
    checkFizzBuzz();
  });

  $("#none").on('click touch', function() {
    checkNone();
  });


  checkFizz = function() {
      if (x%3 == 0) {
        setTimeout(function(){ $('#number').html("fizz"); }, 3000);
        $('#number').html(arr.shift());
      }
  }

  checkBuzz = function() {
      if (x%5 == 0) {
        setTimeout(function(){ $('#number').html("buzz"); }, 3000);
        $('#number').html(arr.shift());
      }
  }

  checkFizzBuzz = function() {
      if (x%3 == 0 && x%5 == 0) {
        setTimeout(function(){ $('#number').html("fizzbuzz"); }, 3000);
        $('#number').html(arr.shift());
      }
  }

  checkNone = function() {
    if (x%3 != 0 && x%5 != 0) {
      setTimeout(function(){ $('#number').html("none"); }, 3000);
      $('#number').html(arr.shift());
    }
  }

});
