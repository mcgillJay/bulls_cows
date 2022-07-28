function gameStart () {
    let mysteryCode = designateCode();

    document.getElementById('one').addEventListener('click', () => guess('1'))
    document.getElementById('two').addEventListener('click', () => guess('2'))
    document.getElementById('three').addEventListener('click',() => guess('3'))
    document.getElementById('four').addEventListener('click', () => guess('4'))
    document.getElementById('five').addEventListener('click', () => guess('5'))
    document.getElementById('six').addEventListener('click', () => guess('6'))
    document.getElementById('seven').addEventListener('click', () => guess('7'))
    document.getElementById('eight').addEventListener('click', () => guess('8'))
    document.getElementById('nine').addEventListener('click', () => guess('9'))
    document.getElementById('clear').addEventListener('click', clear)
    document.getElementById('zero').addEventListener('click', () => guess('0'))
    document.getElementById('enter').addEventListener('click', () => checkResult(mysteryCode))
    
    
    function checkResult(mysteryCode) {

        console.log('code is ' + mysteryCode)
        let guess = grabGuess();
        console.table(guess);
        for (i=0; i<guess.length; i++) {
            
            if(guess[i].text == mysteryCode[i]) {
                guess[i].color = 'green';
            } 
            else for (j=0; j<mysteryCode.length; j++) {
                if (guess[i].text == mysteryCode[j]) {
                    guess[i].color = 'yellow';
                }
            }

        }
        
        setFeedback(...guess);
        clear();
    }
    



function clear() {
    document.getElementById("oneGuess").innerText = '?';
    document.getElementById("twoGuess").innerText = '?';
    document.getElementById("threeGuess").innerText = '?';
    document.getElementById("fourGuess").innerText = '?';
    return;
}

function setFeedback(...feedback) {
    console.table(feedback)
    document.getElementById('oneFeedback').innerText = feedback[0].text;
    document.getElementById('oneFeedback').style.backgroundColor = feedback[0].color
    document.getElementById('twoFeedback').innerText = feedback[1].text;
    document.getElementById('twoFeedback').style.backgroundColor = feedback[1].color;
    document.getElementById('threeFeedback').innerText = feedback[2].text;
    document.getElementById('threeFeedback').style.backgroundColor = feedback[2].color; 
    document.getElementById('fourFeedback').innerText = feedback[3].text;
    document.getElementById('fourFeedback').style.backgroundColor = feedback[3].color;
    return; 
}

function guess(num) {

    if (document.getElementById("oneGuess").innerText == '?') {
        document.getElementById("oneGuess").innerText = num;
    } else if  (document.getElementById("twoGuess").innerText == '?') {
        document.getElementById("twoGuess").innerText = num;
    } else if (document.getElementById("threeGuess").innerText == '?') {
        document.getElementById("threeGuess").innerText = num;
    } else if (document.getElementById("fourGuess").innerText == '?') {
        document.getElementById("fourGuess").innerText = num;
    } 
    
}


function grabGuess () {
    let guessOne = {
        text : document.getElementById("oneGuess").innerText,
        color : document.getElementById("oneGuess").style.backgroundColor,
    }
    let guessTwo = {
        text : document.getElementById("twoGuess").innerText,
        color : document.getElementById("twoGuess").style.backgroundColor,
    }
    let guessThree = {
        text : document.getElementById("threeGuess").innerText,
        color : document.getElementById("threeGuess").style.backgroundColor,
    }
    let guessFour = {
        text : document.getElementById("fourGuess").innerText,
        color : document.getElementById("fourGuess").style.backgroundColor,
    }
    let guess = [guessOne,guessTwo,guessThree,guessFour];
    return guess;
}


function designateCode() {
    let mysteryCode = [];
    for (i=0; i < 4; i++) {
   mysteryCode[i] = Math.floor(Math.random() *10);
    }
    console.log(mysteryCode);
    return mysteryCode;
}



}
gameStart();
// ooo::: generate random secret code, recieve user inputX4, check input against code, update feedback to guess