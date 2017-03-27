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
    event.preventDefault();
    var sentence = $("#sentence").val();
    var splitSentence = sentence.split([" "]);

    var threeOrMore = []

    // using filter method
    function greater3(value){
      return value.length >= 3;
    }
    var threeOrMore = splitSentence.filter(greater3)

    //using for each
    splitSentence.forEach(function(word) {
      if (word.length >=3) {
        threeOrMore.push(word);
      }
    })

    var reversed = threeOrMore.reverse();
    var concated = splitSentence.concat(threeOrMore);
    var joined = concated.join(', ');


    console.log(threeOrMore);
  });
//   var deck = [];
//   suits = ["spades", "hearts", "clubs", "diamonds"]
//   values = ["ace", "2", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
//   suits.forEach(function(suit){
//     values.forEach(function(value){
//       deck.push(value + " of " + suit)
//     });
//   });
//   deck.forEach(function(card) {
//     if (card) {
//       $("ul").append("<li>" + card + "</li>");
//     }
//   });
//   console.log(deck);
});
