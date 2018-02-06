print = println; 

(function() {
   var s1 = "abc", s2 = "abc", s3 = new String(s1)
   var s4 = s3;

   print("typeof s1 " + typeof s1 + " typeof s3 " + typeof s3);
   print("s1 === s2: ", s1 === s2);  // compare elemental values
   print("s3 === s4: ", s3 === s4);  // compare refs to objects -- compare refs
   print("s3 === s1: ", s3 === s1);  // compare refs to objects (one a wrapper)
   print("s3 === new String(s1): ", s3 === new String(s1));

   s1.tag = s3.tag = 42;
   print("s1.tag: " + s1.tag + " s3.tag: " + s3.tag);
   delete s3.tag;
   print("s3.tag post delete: " + (s3.tag || "deleted"));
})();

(function() {
   var s1 = new String("abc"), s2 = new String("def");
   
   s1.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.substr(1);
   }
   
   print(s1.capitalize());
   // print(s2.capitalize());
   s2.toUpperCase = function() {
      return "I GOT YOUR UPPERCASE RIGHT HERE!";
   }
   print(s2.toUpperCase());
   //print(String.concatAll("This", " is", " a", " test."));
})();

String.concatAll = function() {
   var rtn = "";
   
   for (var i = 0; i < arguments.length; i++)
      rtn = rtn + arguments[i];
      
   return rtn;
}

print(String.concatAll("This", " is", " a", " test."));
print(String.concatAll("How", " about", " that?"));

/* Output:
typeof s1 string typeof s3 object
s1 === s2: true
s3 === s4: true
s3 === s1: false
s3 === new String(s1): false
s1.tag: undefined s3.tag: 42
s3.tag post delete: deleted
Abc
I GOT YOUR UPPERCASE RIGHT HERE!
This is a test.
How about that?
*/

