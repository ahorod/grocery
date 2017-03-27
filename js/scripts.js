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


// Our attempt at exercise counting the unique words
//   var textBlock = "hello hello world world world hey."
//   var words = textBlock.split([" "]);
//   console.log(words);
//   var alphabetized = words.sort();
//   var alphabetized = alphabetized.push("filler")
//   console.log(words);
//   wordCounts = [];
//
// var counter = 1
//   for (var i = 0; i < alphabetized.length; i++) {
//     if (i>0) {
//       if (alphabetized[i] === alphabetized[i-1]) {
//         counter += 1
//         var output = alphabetized[i]+ counter
//         debugger
//       } else {
//         var output = alphabetized[i]+ counter
//         var counter = 1
//         debugger
//       }
//     wordCounts.push(output)
//     }
//   }
//   console.log(wordCounts);



// Stack overflow's response to the same problem: http://stackoverflow.com/questions/5667888/counting-the-occurrences-of-javascript-array-elements
//function foo(arr) {
//     var a = [], b = [], prev;
//
//     arr.sort();
//     for ( var i = 0; i < arr.length; i++ ) {
//         if ( arr[i] !== prev ) {
//             a.push(arr[i]);
//             b.push(1);
//         } else {
//             b[b.length-1]++;
//         }
//         prev = arr[i];
//     }
//
//     return [a, b];
// }
});
