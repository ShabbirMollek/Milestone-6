// problem-1 :
const multiply = (x,y,z) => x*y*z;

const result =multiply(2,4,5);
console.log(result);


// problem-2 :
const sentence =`I am web  developer .
I love tro code .
I love to eat biryani` ;
console.log(sentence);


// problem-3 :

const add = (num5, num6 = 5) => num5 + num6;

const sum = add(4, );
console.log(sum);



// problem-4 :
const friends = ['shabbir', 'Amol', 'Aiza', 'Retu', 'Mollika', 'Morsheda'];
const evenNumberFriends = [];

friends.forEach((friend) => {
  console.log(`Length of ${friend}: ${friend.length}`);
  if (friend.length % 2 === 0) {
    evenNumberFriends.push(friend);
  }
});

console.log("Even length names:", evenNumberFriends);

// problem -5: 


const square =[3,4,5,6,7,8,9];
const squaredArray = square.map((num) => num * num);
console.log(squaredArray);

// problem-6:

const numbersOne = [3,4,5,66,77,44,67,89,90,345,3445,2332];
const numbersTwo =[56,57,88,91,34,55,66,74,83,431,438,996,449];

const newArray =[...numbersOne , ...numbersTwo];
const maxValues =Math.max.apply(null ,newArray);
console.log(maxValues);