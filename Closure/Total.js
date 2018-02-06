load("LinkedList4.js");

(function() {
   var total = 0, list = new LinkedList();
   
   list.add(42);
   list.add(14);
   list.add(100);
   list.forEach(function(val) {total += val;});
   print("Total is " + total);
})();