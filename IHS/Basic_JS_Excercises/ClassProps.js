var Sample = function(first, last) {
   
   this.first = first;
   this.last = last;
   Sample.mostRecent = this;
   this.print = function() {

      println(this.last + ", " + this.first);

   }
   
};

var main = function() {
   var sample = new Sample("John", "Doe");

   sample.print();   
   if (Sample.mostRecent === sample) {
      Sample.mostRecent.print();
   }

   sample = new Sample("Jane", "Smith");
   sample.print();
   if (Sample.mostRecent === sample) {
      Sample.mostRecent.print();
   }
};

main();