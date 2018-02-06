var LinkedList = function() {
   this.head = null;
   // set hidden prototype reference to LinkedList.prototype
}
   
LinkedList.prototype.add = function(val) {
   this.head = {data: val, next: this.head};
   return 1;
};
   
LinkedList.prototype.apply = function(action) {
   for (var temp = this.head; temp; temp = temp.next)
      action(temp.data);
};

LinkedList.prototype.drop = function(val) {
   var prior, dropped = 0;
      
   for (var temp = this.head; temp; temp = temp.next) {
      if (temp.data === val) {
         if (prior)
            prior.next = temp.next;
         else
            this.head = temp.next;
         dropped++;
      }
      else
         prior = temp;
   }
   
   return dropped;
};