function A() {}
function B() {}

A.prototype.printMyName = function() {
   println("A")
}

B.prototype.printMyName = function() {
   println("B")
}


<*-- Input Area 1: 10 rows --*>
B = A;


b = new B() 
b.printMyName()