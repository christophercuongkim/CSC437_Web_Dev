var LinkedList = function() {
   this.head = null;
}
   
LinkedList.prototype.add = function(val) {
   this.head = {data: val, next: this.head};
};
   
LinkedList.prototype.apply = function(action) {
   for (var temp = this.head; temp; temp = temp.next) {
      action(temp.data);
   }   
};

var countOccurrences = function(histogram) { 
   
   <*-- Input Area 1: 3 rows --*>
   
   return function(i) {
      if (histogram[i] === undefined) {
         histogram[i] = 1;
      }
      else {
         histogram[i]++; 
      }
   }
   
}

function printHistogram(histogram) {
   for (var i in histogram) {
      if (histogram[i]) {
         println("(#" + i + ":" + histogram[i] +")")
      }   
   }
}

var main = function() {
   var list = new LinkedList();
   var histogram = [];
   while (ln = readln().trim()) {
      list.add(ln)
   }   
   list.apply(countOccurrences(histogram))
   printHistogram(histogram)
};

main()