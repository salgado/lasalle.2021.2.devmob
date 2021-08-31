var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);


console.log(shopping[2]);

var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

var myArray = myData.split(',');
console.log(myArray);


var myNewString = myArray.join('-');
console.log(myNewString);

myArray.push('Flamengo');
myArray;
myArray.push('Vasco', 'Botafogo');

myArray[myArray.length] = "Fluminense"

console.log(myArray);

myArray.pop();

console.log(myArray);

myArray.unshift('BRAZIL');

console.log(myArray);

var removedItem = myArray.shift();
console.log(myArray);
removedItem;

