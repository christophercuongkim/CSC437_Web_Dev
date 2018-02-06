var makeLinkedList = function() {
   var head = null;
   
   return {
      add: function(val) {
         head = {data: val, next: head};
      },
      forEach: function(action) {
         for (var temp = head; temp; temp = temp.next)
            action(temp.data);
      },
      mapEach: function(action) {
         for (var temp = head; temp; temp = temp.next)
            temp.data = action(temp.data);
      },
      iterator: function() {
         var curNode = head;
         return {
            hasNext: function() {return curNode;},
            advance: function() {curNode = curNode && curNode.next;},
            current: function() {return curNode && curNode.data;},
            reset:   function() {curNode = head;}
         }
      }
   };
};