load("LinkedList4.js");

var makeSummer = function() {
   var total = 0;
   
   return function(val) {
      total += val;
      return total;
   };

};

(function() {
   var list = new LinkedList();
   var summer = makeSummer();
   var summer2 = makeSummer();
   
   [42, 14, 14, 33, 33, 33, 100].reverse().forEach(function(val) {list.add(val);});
   list.mapEach(summer);
   list.forEach(function(val) {println(val);});
})();