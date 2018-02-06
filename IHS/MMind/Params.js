var Params = function() {
   this.params;
   this.maxChar;
   this.seed;
   this.charAmt;
   this.read = function() {
      
      while (true) {
         println("Enter max character, number of characters, and seed");
         this.params = readln().split(" ");
         if(this.params.length != 3) {

            println("Must have three entries.");

         }
         if (this.params[0].charCodeAt(0) < "A".charCodeAt(0) || this.params[0].charCodeAt(0) > "F".charCodeAt(0)) {
            println("Enter max character, number of characters, and seed\nMax char must be between A and F");
            continue;
         }
         else {
            this.maxChar = this.params[0];
         }
         if (parseInt(this.params[2]) < 0 || !parseInt(this.params[2])) {
         
            println("Enter a nonnegative integer for seed");
            continue;

         }
         else {

            this.seed = parseInt(this.params[2]);
            this.randRange = this.maxChar.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

         }
         this.charAmt = parseInt(this.params[1]);
         return;
      }
      
   };
}

