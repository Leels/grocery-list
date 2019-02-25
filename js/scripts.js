$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var question1Input = $("input#question1").val();
    var locationInput = $("input:radio[name=location]:checked").val();
    var costInput= $("#cost").val();
    var roomInput = $("input#room").val();
    var animalInput = $("input#animal").val();


    $(".question1").text(question1Input);
    $(".location").text(locationInput);
    $(".cost").text(costInput);
    $(".room").text(roomInput);
    $(".animal").text(animalInput);


    $("#story").show();

    event.preventDefault();
  });
});
