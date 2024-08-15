const randomNumber = Math.floor(Math.random()*100 +1)

console.log(randomNumber)

//window.alert(guessNumber(randomNumber))

guessNumber(randomNumber)
function guessNumber (randomNumber){
    let guess = parseInt(window.prompt("Please guess number between 1-100"))
    console.log(guess);

    let returnMessage = "Hi"
    let attempt = 1

    if(! isNaN(guess)){
        while(guess !== randomNumber && attempt < 10 && guess !== isNaN){
            if(guess < randomNumber){
                returnMessage = `Number is higher than your number. You have ${10-attempt} attempts remaining`
            }else{
                returnMessage = `Number is lower than your number. You have ${10-attempt} attempts remaining`
            }
            attempt ++;
            guess = parseInt(window.prompt(`${returnMessage}, please pick a nuber between 1-100`)) 
        }
    }else{
        returnMessage ="Enter Valid Number"
    }
    if(guess === randomNumber) {
        returnMessage = `Yes number was ${randomNumber}  .....You WINNNNNN`;
    }else if(attempt === 6){
        returnMessage ="Game Over"
    }else{
        returnMessage ="Please enter valid number"
    }

    window.alert(returnMessage)
    
}