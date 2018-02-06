var readline = readln;
var print = println;

var getGuess = function(params) {
   var line, letters, letter, errors;

   do {
      letters = [];
      errors = 0;
      if (line = readline()) {
         letters = line.trim().toUpperCase().split(' ');
         for (var i = 0; i < letters.length; i++) {
            letter = letters[i];
            if (letter.length != 1 || letter < 'A' || letter > params.maxChar) {
               print(letters[i], " is not a valid guess");
               errors++;
            }
         }
         if (letters.length < params.length) {
            print("Guess is too short");
            errors++;
         }
         else if (letters.length > params.length) {
            print("Guess is too long");
            errors++;
         }
      }
   } while (line && errors);
     
   return letters;
};





