load("LinkedList4.js");

var makeAdder = function(incr) {
   return function(val) {return val + incr;}
};

(function() {
   var list = new LinkedList();
   var adder = makeAdder(10);
   
   [42, 14, 100].reverse().forEach(function(val) {list.add(val);});
   list.mapEach(adder);
   list.forEach(println);    //(function(val) {println(val);});
})();