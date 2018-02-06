var LinkedList = function() {
   this.head = null;
};

LinkedList.prototype.add = function(val) {
   this.head = {data: val, next: this.head};
   return 1;
};

LinkedList.prototype.forEach = function(action) {
   for (var temp = this.head; temp; temp = temp.next)
      action(temp.data);
};

LinkedList.prototype.mapEach = function(action) {
   for (var temp = this.head; temp; temp = temp.next)
      temp.data = action(temp.data);
};
