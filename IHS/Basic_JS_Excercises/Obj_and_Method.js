var InitLinkedList = function(list) {
   list.head = null;
   list.count = 0;
   
   list.add = function(val) {
      this.head = {data: val, next: this.head};
      this.count++;
   };
   
   list.print = function() {
      for (var temp = this.head; temp; temp = temp.next)
         println(temp.data);
   };

   list.drop = function(val) {
      var prior;
      
      for (var temp = this.head; temp && temp.data !== val; temp = temp.next)
         prior = temp;
      
      if (temp) {
         if (prior)
            prior.next = temp.next;
         else
            head = temp.next;   
         this.count--;
      }
   };

   list.addPrint = function(val) {
      
      this.add(val);
      this.print();
      
      
   };
};

var LLDriver = function() {
   var cmd, list, lists = [{}, {}];
   
   InitLinkedList(lists[0]);
   InitLinkedList(lists[1]);
   
   while ((cmd = readln().split(/\s+/)).length) {
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
      else if (cmd[0] === 'addPrint')
         list.addPrint(cmd[2]);
   }
};

LLDriver();