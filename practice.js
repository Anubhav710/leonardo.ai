const arr = ["1", "2", "3", "4"];

const arr2 = [[...arr]];

arr2.push([...arr]);
console.log(arr2.length);
