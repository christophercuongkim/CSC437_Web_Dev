var Pattern = function(params) {

   this.params = params;
   this.content = [];

   this.read = function() {

      var line;
      var incorrect;
      var temp;

      while(!line || incorrect) {
         incorrect = 0;
         if (line = readln()) {

            temp = line.toUpperCase().trim().split(" ");
            for (var i = 0; i < temp.length; i++) {

               if (temp[i].length != 1 || temp[i].charCodeAt(0) < "A".charCodeAt(0) 
                || temp[i].charCodeAt(0) > this.params.maxChar.charCodeAt(0)) {

                  println(temp[i] + " is not a valid guess.");
                  incorrect++;


               }

            }
            if (temp.length < this.params.charAmt) {

               println("This guess is too short.");
               incorrect++;

            }
            else if (temp.length < this.params.charAmt) {

               println("This gueses is too long.");
               incorrect++;
            }

         }

      }

      for (var i = 0; i < temp.length; i++) {

         this.content[i] = temp[i];

      }

   }

   this.randomize = function() {
      Math.random(this.params.seed);
      for(var i = 0; i < this.params.charAmt; i++) {

         this.content[i] = String.fromCharCode('A'.charCodeAt(0) + (Math.random() * this.params.randRange));

      }

   }

   this.toString = function() {

      var printStr = "";
      for(var i = 0; i < this.content.length; i++) {

         if (i === 0) {
            printStr += this.content[i];
         }
         else {
            printStr += (" " + this.content[i]);
         }

      }
      return printStr;

   }

   this.match = function(oPattern) {

      var result = {
         exact: 0,
         inexact: 0,
         lost: 0,
         toString: function() {
            return ("\n" + this.exact + " exact and " + this.inexact + " inexact.");
         },
         imperfect: function() {
            return this.lost;
         }
      };
      var mMatches = [], gMatches = [];

      for(var i = 0; i < this.content.length; i++) {

         if (this.content[i] === oPattern.content[i]) {

            mMatches[i] = gMatches[i] = true;
            result.exact++;
         }

      }

      for(var i = 0; i < this.content.length; i++) {

         for(var j = 0; j < this.content.length; j++) {

            if (!mMatches[i] && !gMatches[j] && this.content[i] === oPattern.content[j]) {
               
               mMatches[i] = gMatches[j] = true;
               result.inexact++;
            
            }

         }

      }

      result.lost = this.params.charAmt != result.exact;
      return result;
   }

}