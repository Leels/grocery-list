$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var itemArray = ["item1", "item2", "item3", "item4"];
    var newArray = [];


    itemArray.forEach(function(lol) {
      var userItem = $("input#" + lol).val();
      newArray.push(userItem);
    });

    newArray.sort();
    newArray.forEach(function(food) {
      $(".unstyled").append(`<li> ${food} </li>`);
    })

    $("#list").show();

    event.preventDefault();
  });
});
