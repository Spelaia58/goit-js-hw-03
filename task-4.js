const countTotalSalary = function(employees) {
    const values = Object.values(employees);
    let totalSum = 0;
    for(const value of values) {
        totalSum += value;
    }
    return totalSum;
  };




console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); 

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);