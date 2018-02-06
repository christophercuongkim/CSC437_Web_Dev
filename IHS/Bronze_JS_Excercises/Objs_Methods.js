Math.seed;
Math.random = function(seed) {
   
   if (seed) {
      Math.seed = seed;
   }
   else {

      Math.seed = (Math.seed * 131071 + 524287) % 8191;
      return Math.seed / 8191;    
 
   }
};

(function() {
   var rnd;
   
   for (var i = 0; i < 2; i++) {
      Math.random(1);  // Set seed to 1
      do {
         println(rnd = Math.random());
      } while (rnd < .90);
   }
})();
