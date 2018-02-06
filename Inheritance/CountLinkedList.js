var CountLinkedList = function() {
   LinkedList.apply(this);
   this.count = 0;
}

CountLinkedList.prototype.__proto__ = LinkedList.prototype;

CountLinkedList.prototype.add = function(val) {
   var added = LinkedList.prototype.add.apply(this, [val]);
   
   this.count += added;
}

CountLinkedList.prototype.drop = function(val) {
   var dropped = LinkedList.prototype.drop.apply(this, [val]);
   
   this.count -= dropped;
   return dropped;
}

CountLinkedList.prototype.getCount = function(val) {
   return this.count;
}