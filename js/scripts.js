
// back end
var vowel = ["a","e","i","o","u"]

var consonantCheck = function(input) {
  alert(input.charAt(1));
  //
  // for (var index = 0; index < vowel.length; index++) {
  //   alert(vowel.length);
  //   if (input.charAt(0) === vowel[index]) {
  //
  //   return input.slice(1,input.length) + input.slice(0,1) + "ay";
  //
  //   } else if (input.charAt(1) === vowel[index]) {
  //
  //   return input.slice(2,input.length) + input.slice(0,2) + "ay";
  //
  //   } else if (input.charAt(2) === vowel[index]) {
  //
  //   return input.slice(3,input.length) + input.slice(0,3) + "ay";
  //
  //   }
  // }
}

var isNotALetter = function(input) {
  for (index=0; index < input.length; index++) {      //check if not a letter
    var ascii = input.charCodeAt(index);
    if (ascii < 65 || (ascii >90 && ascii <96) || ascii > 122) {
      return true
    }
  }
}

var translateToASCII = function(input) {

  var notALetter = isNotALetter(input);
  if (notALetter) {
    alert("Not a letter");
  } else {
    for (var index=0; index < vowel.length && ; index++) {
      if (input.charAt(0) === vowel[index]) {
        return input  + "way";
      } else {
        consonantCheck(input);
          // input = input + inputSliced + "ay";
      }
    }
  }
}
//}


// front end
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var input = $('input#string').val();

    var result = translateToASCII(input);
    $("#output").text(result);
    $("#output").show();
  });
});
