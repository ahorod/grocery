$(document).ready(function(){
  $("#grocery").submit(function(event) {
    event.preventDefault();
    var items = ["item1","item2","item3","item4","item5","item6","item7","item8"];

    var groceries = items.map(function(item){
      return $("#" + item).val();

    });
    var alphebetized = groceries.sort();

    var upperCase = alphebetized.map(function(word) {
      return word.toUpperCase();
    })
    console.log(upperCase);
    $("#grocery").hide();
    $("ul").show();
    upperCase.forEach(function(item) {
      if (item) {
        $("ul").append("<li>" + item + "</li>");
      }
    })
  });
  $("#word-play").submit(function(event) {

  })


});
