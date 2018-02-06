var readline = readln;
var print = println;

var InitLinkedList = function(list) {
   list.head = null;
   list.count = 0;
   
   list.add = function(val) {
      this.head = {data: val, next: this.head};
      this.count++;
   };
   
   list.print = function() {
      for (var temp = this.head; temp; temp = temp.next)
         print(temp.data);
   };

   list.drop = function(val) {
      var prior;
      
      for (var temp = this.head; temp && temp.data !== val; temp = temp.next)
         prior = temp;
      
      if (temp) {
         if (prior)
            prior.next = temp.next;
         else
            this.head = temp.next;
         this.count--;
      }
   };
};

var LLDriver = function() {
   var cmd, list, lists = [{}, {}];
   var add;
   
   InitLinkedList(lists[0]);
   InitLinkedList(lists[1]);
   
   add = lists[0].add;
   add(10);
   add.call(lists[0], 42);  // Also add.apply(lists[0], [42]);
   lists[0].print();
   
   while ((cmd = readline().split(/\s+/)).length) {
      if (cmd[0] === 'quit')
         break;
      
      list = lists[cmd[1]];
      if (cmd[0] === 'add')
         list.add(cmd[2]);
      else if (cmd[0] === 'drop')
         list.drop(cmd[2]);
      else if (cmd[0] === 'count')
         print("There are " + list.count + " items in the list.");
      else if (cmd[0] === 'print')
         list.print();
   }
};

LLDriver();
