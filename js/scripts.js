
// back end
var vowel = ["a","e","i","o","u","y","A","I","E","O","U","Y"]

var isNotALetter = function(input) {
  for (index=0; index < input.length; index++) {      //check if not a letter
    var ascii = input.charCodeAt(index);
    if (ascii < 65 || (ascii >90 && ascii <96) || ascii > 122) {
      return true
    }
  }
}

var isALetter = function(input) {
  if (input.includes("qu")) {
    return includesQu(input);
  } else if (input.charAt(0) === "y") {
    return input + "ay";
  } else if (vowel.indexOf(input[0]) > -1 ) {
    return input + "way";
  } else if (vowel.indexOf(input[1]) > -1) {
    return input.slice(1,input.length) + input.slice(0,1) + "ay";
  } else if (vowel.indexOf(input[2]) > -1) {
    return input.slice(2,input.length) + input.slice(0,2) + "ay";
  } else if (vowel.indexOf(input[3]) > -1) {
    return input.slice(3,input.length) + input.slice(0,3) + "ay";
  }
}

var includesQu = function(input) {
  if (input.charAt(0) === "q" || input.charAt(1) === "q") {
    return input.slice(input.indexOf("u")+1, input.length) + input.slice(0,input.indexOf("u")+1) + "ay";
  }
}

var translateToASCII = function(input) {
  var notALetter = isNotALetter(input);
  if (notALetter) {
    alert("Please enter only letters.");
  } else {
    return isALetter(input);
  }
}

var stringToArray = function (input) {
  return input.split(" ");
}


// front end
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var input = $('input#string').val();
    var inputArray = stringToArray(input);
    var resultArray = [];

    inputArray.forEach(function (inputElement) {
      resultArray.push(translateToASCII(inputElement));
    });
    var result = resultArray.join(" ");
    $(".translationOutput").text(result);
    $("#output").show();
  });
});
