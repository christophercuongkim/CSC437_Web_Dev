load("LinkedList4.js");

println = print;

var makeComparer = function() {
   var prior;
   
   return function(val) {
      if (prior === val) 
	     println(val, " is repeated");
      prior = val;
   }
};

(function() {
   var list = new LinkedList();
   
   [42, 14, 14, 33, 33, 33, 100].forEach(function(val) {list.add(val);});
   
   list.forEach(makeComparer());
})();
