$(document).ready(function() {
  $("#formOne").submit(function(event) {
    
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    /*  blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    }); */
    console.log(blanks.length);

    for ( var index = 0; index < blanks.length; index+=1){
      var userInput = $('input#'+blanks[index]).val();
      $("." + blanks[index]).text(userInput);
    }

    $("#story").show();

    event.preventDefault();
  });
});