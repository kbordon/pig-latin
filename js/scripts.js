// back end
var translateToASCII = function(input) {
  var ascii = input.charCodeAt(0);
  if (ascii <65 || (ascii >90 && ascii <96 || ascii > 122)) {
    alert("do nothing");
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
