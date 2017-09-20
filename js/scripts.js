// back end
var translateToASCII = function(input) {
  var ascii = input.charCodeAt(0);
  if (ascii <65 || (ascii >90 && ascii <96 || ascii > 122)) {
    alert("do nothing");
  }
  var vowel = ["a","e","i","o","u"]
  // var inputArray = input.split("");
  // for (var index=0; inputArray.length < index; index++) {
  //
  // }

  for (var index=0; index < vowel.length; index++) {
    if (input.charAt(0) === vowel[index]) {
      return input  + "way";
    } else { TODO figure out a for loop more than one consonant
      if (input.charAt(1) === vowel[index]) {
        inputSliced = input.slice(1,input.length) + input.slice(0,1) + "ay";
      }

      // input = input + inputSliced + "ay";
      alert(inputSliced);
    }
  }

}
// front end
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var input = $('input#string').val();

    var result=translateToASCII(input);
    $("#output").text(result);
    $("#output").show();
  });
});
