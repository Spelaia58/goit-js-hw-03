const countProps = function(obj) {
const keys = Object.keys(countProps);
return Object.keys(obj).length;
}
console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

