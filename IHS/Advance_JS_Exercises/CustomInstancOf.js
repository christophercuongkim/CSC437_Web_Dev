function F() {}
function G() {}

a = [new F(), new G(), new F(), [], {}, new F()];

function isConstructedBy(obj, C) {
   
   <*-- Input Area 1: 1 rows --*>
   return obj.constructor === C;
   
}

for (var i = 0; i < a.length; i++)
   if (isConstructedBy(a[i], F))
      println("Element " + i + " is an F");
   else if (isConstructedBy(a[i], G))
      println("Element " + i + " is a G");