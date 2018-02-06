var reverseWords = function() {
   var line;
   
   while (line = readln()) {
      
      println(line.split(" ").reverse().join(" "));
      
   }
};

reverseWords();
