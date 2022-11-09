var tal1 = document.getElementById("tal1");
var tal2 = document.getElementById("tal2");
var tal3 = document.getElementById("tal3");
var answer = Math.floor(Math.random()*100) + 1;
var Number_of_guesses = 0;
var guessed_nums = [];
document.getElementById("btn").addEventListener("click", play)
function play() {
    var guess = document.getElementById("guess").value;
     if(guess < 1 || guess > 100) {
         alert("Enter a number between 1 & 100");
     }
     else{
        guessed_nums.push(guess);
        Number_of_guesses += 1;
        if(guess < answer){
            tal1.textContent = "För Lågt!";
            tal2.textContent = "Antal gissade gånger: " + Number_of_guesses;
            tal3.textContent = "Gissade talet är: " + guessed_nums;
        }
        else if(guess > answer){
            tal1.textContent = "För Högt!";
            tal2.textContent = "Antal gissade gånger: " + Number_of_guesses;
            tal3.textContent = "Gissade talet är: " + guessed_nums;
        }
        else if(guess == answer){
            tal1.textContent = "HURRA!! DU VINNER!!!";
            tal2.textContent = "Rätta talet är: " + answer;
            tal3.textContent = "Antal gissade gånger:"+ Number_of_guesses + " guesses";
        }
     }
}