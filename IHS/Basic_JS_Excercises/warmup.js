/*
* @Author: chriskim
* @Date:   2018-01-11 09:43:16
* @Last Modified by:   chriskim
* @Last Modified time: 2018-01-11 10:26:44
*/

function Quadratic(a, b, c) {

   var solution1;
   var solution2;

   var determinant = (Math.pow(b, 2) - ( 4 * a * c));

   if (determinant < 0 || a === 0) {
      print(determinant + "\n")
      print("No Solution\n");
      return;
   }
   else if (determinant === 0) {

      solution1 = (-b + Math.sqrt(determinant)) / (2 * a);
      print("Solution: " + solution1 + "\n");
      
   }
   else {
      solution1 = (-b + Math.sqrt(determinant)) / (2 * a);
      solution2 = (-b - Math.sqrt(determinant)) / (2 * a);
      print("Solutions: " + solution1 + " ", solution2 + "\n");
   }
   return;

}

var input;

input = readln().split(" ")

Quadratic(input[0], input[1], input[2])