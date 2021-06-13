const a = 9;
const b= 3;

let name="JH";

console.log('hello '+name);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

name="New JH"
console.log("your new name is "+name);

const amIFat = false;
console.log(amIFat);

const isSheFat =null; //there's nothing, 없다라는 뜻으로 쓰임
console.log(isSheFat);

let something;
console.log(something, isSheFat);

const mon='mon';
const tue='tue';
const wen='wen';

const days =[mon, tue, wen];
const nonesense =[1, 2, "wow", false, true ];
console.log(days, nonesense);

//Get Item from Array
console.log(nonesense[3]);

//Add one more item to array
days.push("thu");
console.log(days);

const toBuy =["tomato", "potato", "orange", "apple"];
console.log(toBuy);
toBuy.push("onion");
console.log(toBuy);
console.log(toBuy[3]);