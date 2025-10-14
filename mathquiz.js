const randomNumber1 = Math.floor(Math.random() * 100) + 1;
const randomNumber2 = Math.floor(Math.random() * 100) + 1;

let x = prompt(`What is ${randomNumber2} + ${randomNumber1}?`);



if (x == randomNumber1 + randomNumber2){
    console.log("OK")
} else {
    console.log("Try again")
}
