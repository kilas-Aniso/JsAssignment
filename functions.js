// You manage a grocery store and need to keep track of the inventory of various items.
//  You will use arrays to store the data and various functions to manipulate and analyze the data. 

// Create an array containing the names of all items in the inventory maximum of 10.
let items = ["Banana","Mango","Grapes","orange","pineapple","avocado"]

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let totals = [20,32,15,52,37,48]
// Write a function to add a new item to the inventory, updating both arrays.
// function addItem(item, total){
//   if (items<10){
//  items.push(item);
//  totals.push(total);
// //  console.log("${item} is added to the inventory ${total}")
// }
//  else{
//     console.log("inventory is full")
//  }
// }
// let item =["kiwi"]
// let total = [20]
// console.log(addItem())
function addItem(item, total){
    if (items >=10){
console.log("Inventory is full")
    }
    else{
        items.push(item) && totals.push(total)
    }
}
addItem("carrot", 20)
console.log(items)
console.log(totals)

// Write a function to update the stock quantity of an existing item.
function updateditems(item,total){
let index = items.indexOf(item);
if(total>-1){
    total
}

}

// Write a function to calculate the total number of items in the inventory.
function totalitems(total){
    let all =0
    for (let i = 0; i < totals.length; i++){
        all+=totals[i]

    }
    return all
}
console.log(totalitems())
// Write a function to find the item with the lowest stock quantity.
function lowest(){
    let low = Math.min(...totals);
    let index = totals.indexOf(low);
    console.log(items[index])
  

}
lowest()


