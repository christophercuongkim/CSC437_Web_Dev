var oldSin = Math.sin;
var oldCos = Math.cos;
var oldTan = Math.tan;

Math.sin = function(angle, degree) {

   if (degree) {

      return oldSin((angle) / (180 * Math.PI));

   }
   else {

      return oldSin(angle);

   }

};

Math.tan = function(angle, degree) {

   if (degree) {

      return oldTan((angle) * (180 / Math.PI));

   }
   else {

      return oldTan(angle);

   }

};

Math.cos = function(angle, degree) {

   if (degree) {

      return oldCos((angle) * (180 / Math.PI));

   }
   else {

      return oldCos(angle);

   }

};

(function() {
   var angle;
   
   while (angle = parseFloat(readln())) {
      println(Math.sin(angle, "d").toPrecision(5));  // degrees
      println(Math.sin(angle).toPrecision(5));       // radians
      println(Math.cos(angle, "d").toPrecision(5));
      println(Math.cos(angle).toPrecision(5));
      println(Math.tan(angle, "d").toPrecision(5));
      println(Math.tan(angle).toPrecision(5));
   }
})();
