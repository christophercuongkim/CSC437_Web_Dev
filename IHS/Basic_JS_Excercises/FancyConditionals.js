function findFirstFalsey(a, b, c, d, e) {
   return (
           
          (a && b && c && d && e) && 'None'
           );
}

println(findFirstFalsey(1, false, 3, true, 5)) 
println(findFirstFalsey("Hello", 2, 3, true, 5)) 
println(findFirstFalsey(null, 2, false, 4.2, 5)) 
println(findFirstFalsey(1, 2, "", 4, 5)) 
println(findFirstFalsey("false", "undefined", 3, 4, undefined))
println(findFirstFalsey(1, 2, "0", 4, 5)) 
println(findFirstFalsey(1, NaN, 3, "null", 5)) 