$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var question1Input = parseInt($("input#question1").val());
    var locationInput = $("input:radio[name=location]:checked").val();
    var costInput= parseInt($("#cost").val());
    var roomInput = $("input#room").val();
    var animalInput = $("input#animal").val();

    if (question1Input <= 4 || locationInput === "Beach" || costInput === 2 || roomInput === "Hotel" || animalInput === "Yes") {
      $("#hawaii").show();
    } else if (question1Input >= 5 || locationInput === "Exotic" || costInput === 3 || roomInput === "Airbnb" || animalInput === "No"){
      $("#india").show();
    } else {
      $("#paris").show();
    }


    event.preventDefault();
  });
});
