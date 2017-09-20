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
      input = input + "way";
      return input;
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
