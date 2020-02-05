const findBestEmployee = function(employees) {
  const entries = Object.entries(employees);
     let bestEmployeeName = entries[0][0];
     let highestSalary = entries[0][1];
       for (const entry of entries) {
         
         const salary = entry[1];

           if (highestSalary < salary) {
               bestEmployeeName = entry[0];
               highestSalary = salary;
           }
          }
          return `${bestEmployeeName}`;
      };
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); 
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); 
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); 