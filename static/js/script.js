//Challenge 1 : Your age in days

//1)cream un functie
// 2)calculam tot ce avem nevoie in variabile
// 3)cream un nou element h1
// 4)HTML elements often consists of both an element node and a text node.
// 5)cream un node text pentru h1
// 6)setam atributul de id = ageInDays
// 6)dam append la text la h1
// 7)dam append la divul nostru la h1 

function ageInDays(){
    var birthYear = prompt("what year were you born?"); //ce varsta am?
    var ageInDayss = (2021-birthYear) * 365; // calculeaza varsta in zile
    var h1=document.createElement("h1"); //creaza un nou element h1
    var textAnswer= document.createTextNode("You are "+ ageInDayss + " days old") //imi creaza un text pe care urmeaza sa-l salvez in h1
    h1.setAttribute("id","ageInDays");//imi pune id-ul de la h1 = ageInDays
    h1.appendChild(textAnswer); //imi importa textul in interiorul la h1
    document.getElementById('flex-box-result').appendChild(h1); //introduc h1 la elementul cu id=flex-box-result
    console.log(ageInDayss);   
}

function reset(){
    document.getElementById("ageInDays").remove();
}

function generateCat(){
    var image=document.createElement("img");
    var div=document.getElementById("flex-cat-gen");
    image.src="https://i.ytimg.com/vi/VAx-zI2r4ew/maxresdefault.jpg";
    div.appendChild(image);
    image.setAttribute("id","cacat")
}

function resetCat(){
    document.getElementById("cacat").remove();
}

//Challenge 3 : RPS
//1) Faci o functie mare care sa cuprinda toate comenzile (rpsGame)
//

function rpsGame(yourChoice){ 
    // console.log(yourChoice);
    var humanChoice, botChoice; //am nevoie de 2 variabile una pentru mine una pentru pc random
    humanChoice = yourChoice.id;  //id-ul imaginii alese mi-l baga in humanChoice 
    botChoice = numberToChoice();  //alegerea botului din functia numbertochoice
    console.log("computer choice:", botChoice);  //alegerea botului

    results = decideWinner(humanChoice, botChoice); //afiseaza rezultatul ales 0,0 de tip array 
    console.log(results);

    message = finalMessage(results) //ce-mi afiseazafinal in functie de rezultate
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message) //ce-mi afiseaza pe frontend final 
}


// functie imi face random la numere pentru bot 
function numberToChoice(number){
    var number = Math.floor(Math.random()*3)
    return['rock','paper','scissors'][number];
}

// in functie de ce alegi cand dai click ai un dictionar 
// in care ai 3 cazuri din care o sa aleaga botul si pentru fiecare caz
// o solutie 
function decideWinner(yourChoice, computerChoice) { 
    var rpsDatabase={
        "rock":{'scissors':1, 'rock':0.5, 'paper':0},
        "paper":{'rock':1,'paper':0.5,'scissors':0},
        "scissors":{'paper':1, 'scissors':0.5, 'rock':0}
    }

    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
return [yourScore,computerScore];
}

// mesajul final pe baza scorului meu scos de mai sus. 
// mi-l afiseaza sub forma de array, pentru ca asa-l primeste 
function finalMessage([yourScore, computerScore]){
    if(yourScore===0){
        return {'message':'You lost', 'color':'red'};
    } else if(yourScore===0.5) {
        return {'message':'your tied', 'color':'yellow'};
    } else{
        return{'message':'you won','color':'green'};
    }
}

//am linkurile de la fiecare imagine
// o sa-mi stearga fiecare imagine siin functie de ce aleg
// imi creeaza o noua pagina cu fiecare 3 elemente. 
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    document.getElementById('flex-box-rps-div').append(humanDiv);
    botDiv.innerHTML= "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    document.getElementById('flex-box-rps-div').append(botDiv);
    messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] + "; font-size:60 px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    document.getElementById('flex-box-rps-div').append(messageDiv);
}

// Challenge 4 : change color buttons 

var all_buttons=document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i=0;i<all_buttons.length; i++)
{
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function numberToGenerate(number){
    var randomN = Math.floor(Math.random()*6);
    return randomN;
}



function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonsRed();
    }
    else if(buttonThingy.value==="green"){
        buttonsGreen();
    }
    else if(buttonThingy.value==="reset"){
        buttonColorReset();
    }
    else if(buttonThingy.value==="random"){
        randomColors();
    }
    
}

function buttonsRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);}
    
}

function randomColors(){
    var choices= ["btn-primary", "btn-danger","btn-success", "btn-warning"]
    for(let i=0;i<all_buttons.length;i++){
        var randomNumber=Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//Challenge 5 : blackjack.

let blackjackGame= {
    'you': {'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer': {'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':["2","3","4","5","6","7","8","9","10","K","J","Q","A"],
    'cardsMap':{"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"K":10,"J":10,"Q":10,"A":[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const hitSound=new Audio('static/sounds/swish.m4a');
const winSound= new Audio('static/sounds/cash.mp3');
const lossSound= new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);

function blackjackHit(){
    let card=randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);

  
    
}

function showCard(card, activePlayer){
    if(activePlayer['score']<=21){
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

function blackjackDeal(){
    
    let yourImages=document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');

    for(let i=0;i<yourImages.length;i++){
        yourImages[i].remove();
    }
    for(let i=0;i<dealerImages.length;i++){
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color='#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color='#ffffff';


    
}

function randomCard(){
    let randomIndex=Math.floor(Math.random()*13)
    return blackjackGame['cards'][randomIndex];
}
function updateScore(card, activePlayer){
    if (card==="A"){
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <=21){
          activePlayer['score']+= blackjackGame['cardsMap'][card];
        } else{
            activePlayer['score']+= blackjackGame['cardsMap'][card][0];
         }
        } else{
            activePlayer['score'] +=blackjackGame["cardsMap"][card];
    }
}
function showScore(activePlayer){
    if(activePlayer['score']> 21){
        document.querySelector(activePlayer['scoreSpan']).textContent= "BUST!";
        document.querySelector(activePlayer['scoreSpan']).style.color= "red";

    } else{ 
            document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}}

function dealerLogic(){
    let card= randomCard();
    showCard(card,DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);

    if (DEALER['score'] > 15) {
        let winner = computeWinner();
        showResult(winner);
    }
    
}

function computeWinner(){
    // update the wins draws and losses
    let winner;

    if (YOU['score'] <= 21){
        if (YOU['score'] > DEALER['score'] || (DEALER['score']> 21)){
            blackjackGame['wins']++;
            winner=YOU;
            
        } else if (YOU['score']< DEALER['score']){
            
            blackjackGame['losses']++;
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            
            blackjackGame['draws']++;
        }

    }else if (YOU['score'] > 21 && DEALER['score'] <=21) {
        console.log("you lost");
        winner= DEALER;
        blackjackGame['losses']++;


    } else if (YOU['score'] > 21 && DEALER['score'] >21){
        console.log("you drew");
        blackjackGame['draws']++;

    }
    console.log("winner is", winner);
    return winner;
    console.log(blackjackGame);
}

function showResult(winner){
    let message, messageColor;

    if(winner === YOU) {
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        message="you won";
        messageColor="green";
        winSound.play();

    } else if (winner === DEALER)
    {
        document.querySelector('#losses').textContent = blackjackGame['losses'];
        message="you lost";
        messageColor="red";
        lossSound.play();
    } else {
        message="you drew";
        messageColor="black";
        document.querySelector('#draws').textContent = blackjackGame['draws'];
    }

    document.querySelector('#blackjack-result').textContent= message;
    document.querySelector('#blackjack-result').style.color= messageColor;


}
