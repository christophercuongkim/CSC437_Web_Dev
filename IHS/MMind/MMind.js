load("FixRandom.js");
load("Params.js");
load("Pattern.js");

(function() {
   var guess, model;
   var matches;
   var params = new Params();
   
   params.read();
   Math.random(params.seed);
   model = new Pattern(params);
   guess = new Pattern(params);
   model.randomize();
   println("Model: ", model.toString());
   do {
      print("Enter a guess");
      guess.read();
      matches = model.match(guess);
      println(matches.toString());
   } while (matches.imperfect());
})();

