var record = 
   
   { 
      id : 42,
      email: "jsmith@nodomain.com",
      name: { 
         first: "John",
         last: "Smith"
      },
   }
   
   ;

print("Id:", record.id, " Email:", record.email, " Name:",
 record.name.first + " " + record.name.last);
