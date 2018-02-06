
<*-- Input Area 1: 1 rows --*>
String.prototype.toPigLatin = function() { return this.substring(1) + this.substring(0,1) + "ay";}


print(readln().toPigLatin())