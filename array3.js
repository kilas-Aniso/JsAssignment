//1.  Write a function that accepts an array of strings and 
// console.logs each element using a for loop.

let arr = ["Ann","Aketch","Atong"];
string1(arr)
function string1(arr){
for (let i =0;i<arr.length;i++)
console.log(arr[i]);
}

// 2. Write a function that accepts an array of numbers 
// and uses the forEach() method to console.log each number multiplied by 2.
let num= [22,54,34,67,23];
arr3(num);

function arr3(num){
num.forEach(numb=> {
    console.log(numb*2);
});
}

//3. Write a function that takes in an array of numbers and consoles the first four items
//  multiplied by 8 and the last two added by 5. Console the array with the new values
let arr5=[89,32,54,24,65,85];
arr4(arr5)

function arr4(arr5){
for (let i=0;i<4;i++){
arr5[i]=arr5[i]*8
}
arr5[arr5.length -2]+=5
arr5[arr5.length -1]+=5
console.log(arr5);
}

//4. Write a function that takes in the following array and use a while loop 
// to iterate and break when the item is equal to the fourth index

let arr7 = [1,2,3,4,5,6,7,8,9];
arr6(arr7)

function arr6(arr7){
let i =0;
while(i<arr7.length){
    console.log(arr7[i]);
    if(i===4){
       
        break;
    };
   
    i++
}
}

// 5. Write a function that takes in a an array of strings and use a continue 
// statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
skipIndex(fruits)
function skipIndex(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    if (i === 2) {
      continue;
    }
    console.log(fruits[i]);
  }
}





   
