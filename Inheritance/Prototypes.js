var print = println;
var readline = readln;

(function() {
   var x = new String("alpha"), y = new String("beta");
   
   x.toUpperCase = function() {return "X'S UPPERCASE.";};
   print("toUpperCase in x? " + x.hasOwnProperty("toUpperCase")); 
   print(x.toUpperCase());
   
   delete x.toUpperCase;      // Get rid of new one
   print(x.toUpperCase());    // Hmm.  Old one's back
   print("toUpperCase in x? " + x.hasOwnProperty("toUpperCase"));
   
   x.__proto__.toUpperCase = function () {return "PROTO UPPERCASE.";};
   print(x.toUpperCase());    // OK.  That changes it too.
   print(y.toUpperCase());    // And changes y's as well.
   
   var z = new String("gamma");
   print(z.toUpperCase());    // And even z's
   print("Proto check: ",
    z.__proto__ === x.__proto__ && x.__proto__ === String.prototype);
   
   Number.prototype.oneMore = function () {return this + 1;};
   var i = new Number(1);
   print(i.oneMore() + " " + (42).oneMore());
   
   print("Constructor check: ",
    i.constructor === Number && x.constructor === String);

   print("Finding hasOwnProperty: ");
   print("in x: ", x.hasOwnProperty("hasOwnProperty"));
   print("in x.__proto__: ", x.__proto__.hasOwnProperty("hasOwnProperty"));
   print("in x.__proto__.__proto__: ",
    x.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));
   // Only in recent versions: print(Object.getOwnPropertyNames(Number.prototype));
})();