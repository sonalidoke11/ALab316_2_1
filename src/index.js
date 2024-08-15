const app = document.getElementById("app");
console.log(app);

//const gameBox = document.createElement('table')

const randomNumber= Math.trunc(Math.random()*100+1)
console.log(randomNumber);

// setTimeout(()=>{
//     console.log("throeaway message");
    
// },2000)



let assumedNumber;
let output = "";
do{
    assumedNumber = parseInt(window.prompt("Please guess one number between 1-100"))
    if(randomNumber==assumedNumber){
        output = "You're Smart !!!"
    }else{
        output = `Sorry number was ${randomNumber}, try again!!!`
    }
    window.alert(output)

} while(randomNumber !== assumedNumber)



