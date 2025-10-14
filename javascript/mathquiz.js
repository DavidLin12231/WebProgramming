var score = 0;

for (let i = 0; i < 5; i++) {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    let x = prompt(`What is ${randomNumber2} + ${randomNumber1}?`);

    if (x == randomNumber1 + randomNumber2) {
        console.log("OK");
        score += 1;
        console.log(`Your score is now ${score}.`)
    } else {
        console.log("Try again")
        console.log(`Your score is now ${score}.`)
    }
    console.log(`Your grade for the score is ${20*score};
}
