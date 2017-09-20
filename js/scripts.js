$(document).ready(function() {
  $('form').submit(function(event) {
    event.PreventDefault();
    var input = $('input#string').val();

    var result = translateInput(input);
    $("#output").text(result);
    $("#output").show();
  });
});
