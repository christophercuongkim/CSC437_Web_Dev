var readline = readln;
var print = println;

var LinkedList = function() {
   this.head = null;
   
   this.add = function(val) {
      this.head = {data: val, next: this.head};
   };

   this.apply = function(action) {
      for (var temp = this.head; temp; temp = temp.next)
         action(temp.data);
   };

   this.drop = function(val) {
      this.head = LinkedList.doDrop(this.head, val);
   };
};

LinkedList.doDrop = function doDrop(head, val) {
   if (head) {
      if (head.data === val)
         head = doDrop(head.next, val);
      else
         head.next = doDrop(head.next, val);
   }
   return head;
};

(function() {
   var list = new LinkedList();
   
   var cmd, lists = [new LinkedList(), new LinkedList()];
   
   while ((cmd = readline().split(/\s+/)).length) {
      if (cmd[0] === 'add')
         lists[cmd[1]].add(cmd[2]);
      else if (cmd[0] === 'drop')
         lists[cmd[1]].drop(cmd[2]);
      else if (cmd[0] === 'print')
         lists[cmd[1]].apply(function(val) {print("("+val+")");});
      else if (cmd[0] === 'quit')
         break;    
   }
})();
