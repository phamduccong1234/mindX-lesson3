// 1. Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other
// 1. Use destructuring assignment
let a;
let b;

[a, b] = [5,6];

[a, b] = [b, a];

console.log(a, b);

// 2. Use Temporary
let a = 5;
let b = 6;
let temp;

temp = a;
a = b;
b = temp;

console.log(a, b);

// 3. Calculation
let a = 5;
let b = 6;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b)

// 2. Split String into Array
const s = `Hello beauty there`;

var a = s.split(" ")

console.log(a)

// 3. In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) an array without using loops
const a = [4, 5, 7, -8];
console.log(...a)

// 4. Write a script to simulate a clothes shop, asking and performing certain tasks from users

do{
    let shop = ["Jeans", "T-Shirt", "Socks"]
    let ques = prompt(
        "Hi there, welcome to shop admin, what do you want (c, r, u, d)?"
      );
      if (ques == "c") {
        let newProduct = prompt("Input new product ?");
        shop.push(newProduct);
        let num = 1;
        shop.forEach(function(item){
            console.log(`${num++}. ${item}`)
        })
      } else if (ques == "r") {
        console.log(`The current items are: `)
        let num = 1;
        shop.forEach(function(item){
            console.log(`${num++}. ${item}`)
        })
      } else if (ques == "u") {
        let pick = prompt("Enter the name for product: ");
        let pos = shop.indexOf(pick)
        if(pos == -1){
            alert("Not in array")
        } else {
            let updateShop = prompt("Enter name to update: ")
            shop[pos] = updateShop
            console.log(`The current items are: `)
        let num = 1;
        shop.forEach(function(item){
            console.log(`${num++}. ${item}`)
        })
        }
      } else if (ques == "d") {
        let input = Number(prompt("Enter the position you want to update"));
        shop.splice(input, 1)
        let num = 1;
        shop.forEach(function(item){
            console.log(`${num++}. ${item}`)
        })
    } else {
        alert("This command is not supported");
      }
      choose = prompt("Do you want to continue? (y/n)");
}while(choose == 'y')

// 5. Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users

let input = prompt("Enter a squence of Number, separated by commas (,)")
var list = input.split(",")
let sum = 0;
list.forEach(function(item){
    sum += Number(item) ;
})
alert(`This sum of them is: ${sum}`)

6. Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users

let input = prompt("Enter a squence of Number, separated by commas (,)")
var list = input.split(",")

let smallNum = Math.min(...list)
console.log(`Smallest number is: ${smallNum}`)

// 7.

const arr = [9, 12, 1, 5, 6, 2];
let num = Number(prompt("Enter a number: "))
numCheck =  arr.indexOf(num)
if(numCheck == -1){
    alert("Not in array")
} else {
    alert(`${num} is found in my array at index ${numCheck}`)
}

// 8.

let pig = [60, 35, 10, 5, 75, 100];
pig.forEach(function (item) {
  console.table(`${item}`);
});

let bigPig = Math.max(...pig)
console.log(`Now my biggest pig has size ${bigPig}, let's sell`)

let size = pig.indexOf(bigPig)
pig[size] = 80
console.log(`After sell it and buy new pig with size ${pig}`)

pig.forEach(function (item) {
    console.log(`Month 1`)
    console.log(`One month passed, my pigs have grown`)
    console.log(`${item + 50}`);
});

pig.forEach(function (item) {
    console.log(`Month 2`)
    console.log(`One month passed, my pigs have grown`)
    console.log(`${item + 100}`);
});

pig.forEach(function (item) {
    console.log(`Month 3`)
    console.log(`One month passed, my pigs have grown`)
    console.log(`${item + 150}`);
});

pig.forEach(function (item) {
    console.log(`Month 4`)
    console.log(`One month passed, my pigs have grown`)
    let list = item + 200
    console.log(`${list}`);
});

let sum = 0;
pig.forEach(function(item){
    sum += Number(item);
    let total = sum * 4
    console.log(`My flock has size: ${total}`)
    console.log(`I would get ${total * 2} $`)
})


// 10. 

// let nameInput = prompt("Enter a sequence of names: ")
// var list = nameInput.split(",")

// list.forEach(function(item){
//     const map1 = list.map(item => alert(`<${item}>`))
// })

let nameInput = prompt("Enter a sequence of names, separated by commas (,):")
let list = nameInput.split(",") 
let map1 = list.map(x => `<${x}>` )
alert(map1)

// 11. 

let numberInput = prompt('Enter a sequence of number, separate by commas (,)')
let list1 = numberInput.split(',')
let map2 = list1.filter(num => num % 2 == 0)
console.log(map2)









