var readline = readln;
var print = println;

var readParams = function() {
   var paramLine, params;
   
   while (true) {
      print("Enter max character and number of characters.");
      paramLine = readline().split(' ');
      if (paramLine.length !== 2)
         print("Must have two entries");
      else {
         params = {
            maxChar: paramLine[0].toUpperCase().charAt(0),
            length: parseInt(paramLine[1])
         };
         if (params.maxChar < "A" || params.maxChar > "F")
            print("Max char must be between A and F");
         else if (!params.length || params.length > 10)
            print("Number of chars must be between 1 and 10");
         else {
            params.randRange
             = params.maxChar.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            return params;
         }
      }
   }
};