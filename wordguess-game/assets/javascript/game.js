






const songs = ["adams song", "dammit", "first date", "feeling this", "rock show", "mutt"]

var maxGuesses = 10;
var rightLetter = [];
var wrongLetter = [];
var randNum = Math.floor(Math.random() * songs.length);
var chosenWord = songs[randNum];
var underScore = [];
//var goodSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3")

//dom manipulation
var docUnderScore = document.getElementsByClassName('underscore');
// var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
var docMaxGuesses = document.getElementsByClassName('maxGuesses');

console.log(chosenWord);



var generateUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHTML = underScore.join('');
    }
    return underScore;
}

//gets users guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);

    //if users guess is right
    if (chosenWord.indexOf(keyword) > -1) {
        

        rightLetter.push(keyword);


        //replace underscore with right letter
        // underScore[chosenWord.indexOf(keyword)] = keyword; 
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === keyword) {
                underScore[i] = keyword;
            }
        }

       
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightLetter.join(', ');
        

        //check to see if user word matches guess

        if (underScore.join(' ') == chosenWord) {
           
        }
    }
    else {
        wrongLetter.push(keyword);
        docWrongGuess[0].innerHTML = wrongLetter.join(', ');
        docMaxGuesses[0].innerHTML = maxGuesses--;
    }

        if ( maxGuesses < 0){
        alert("game over");
        document.location.reload(); }

     
        
    // for ( var i = 0; i < chosenWord.length; i++) {
    //         if (( + underScore) === chosenWord.length) {
    //             alert("You win");
    //         }
    // }
  
});


docUnderScore[0].innerHTML = generateUnderscore().join(' ');


