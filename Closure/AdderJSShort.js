load("LinkedList4.js");

var println = print;

(function() {
   var list = new LinkedList();
   
   [42, 14, 100].reverse().forEach(function(val) {list.add(val);});
   
   list.mapEach(function(incr) {
      return function(val) {return val + incr;}
   }(10));
   
   list.forEach(function(val) {println(val);});
})();
