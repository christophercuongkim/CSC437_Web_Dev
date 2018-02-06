load("./ReadParams.js");
load("./GetGuess.js");
load("./FindMatches.js");

var readline = readln;
var print = println;

var mMind = function() {
   var numGames = 0, totalTries = 0, guess, matches, model = [];
   var params = readParams();
   var average;
   
   print("Params: " + params.toSource());
   while (true) {
      average = totalTries/numGames;
      print("Current average: ",
       isNaN(average) ? "N/A" : average.toPrecision(2), " Play a game? ");
      if (readline().trim().toUpperCase().charAt(0) !== "Y")
         break;
         
      numGames++;
      for (var i = 0; i < params.length; i++) {
         model[i] = String.fromCharCode('A'.charCodeAt(0)
          + Math.random() * params.randRange);
      }
      print("Model: ", model);
      do {
         print("Enter a guess");
         matches = findMatches(model, getGuess(params));
         print(matches.exact + ' exact and ', matches.inexact + ' inexact.');
         totalTries++;
      } while (matches.exact < params["length"]);
   }
};

mMind();
