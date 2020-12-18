$(document).ready(function() {
    
    $('#quiz').hide()
    questionCounter = 0
    correctAnsCounter = 0
    incorrectAnsCounter = 0
    i = 100
let questions = [{
    question:'Inside which HTML element do we put the JavaScript?',
    options: ['<script>', '<javascript>','<js>', '<scripting>'],
    answer:'<script>'
}
, {
    question:'Where is the correct place to insert a JavaScript?',
    options:['The <head> section', 'The <body> section', 'Both the <head> and <body> ', 'The <footer> section'],
    answer:'The <body> section',
},
{
    question:'Where is the correct place to insert a JavaScript?',
    options:['The <head> section', 'The <body> section', 'Both the <head> and <body> ', 'The <footer> section'],
    answer:'The <body> section',
},
{
question:'Where is the correct place to insert a JavaScript?',
    options:['The <head> section', 'The <body> section', 'Both the <head> and <body> ', 'The <footer> section'],
    answer:'The <body> section',
}
,{
    question:'Where is the correct place to insert a JavaScript?',
    options:['The <head> section', 'The <body> section', 'Both the <head> and <body> ', 'The <footer> section'],
    answer:'The <body> section',
}
,{
    question:'Where is the correct place to insert a JavaScript?',
    options:['The <head> section', 'The <body> section', 'Both the <head> and <body> ', 'The <footer> section'],
    answer:'The <body> section',
}]

$('#submitButton').on('click', function(){

    startSetUp();

    
    for(x = 0; x < questions.length; x++){
        $('#botton1, #botton2, #botton3, #botton4').on('click', btnClk)
        console.log('gay')
    }

})






var btnClk = function(e){
    if (questions[questionCounter].answer == e.currentTarget.textContent){
        correctAnsCounter++
        console.log('correct')
        //return correctAnsCounter
    }
    else{
        console.log('incorrect')
        incorrectAnsCounter++
        i = i-10
     //   return incorrectAnsCounter
    }
    questionCounter++
    $('#correctAns').text(correctAnsCounter.toString())
    $('#incorrectAns').text(incorrectAnsCounter.toString())
    buttonSetup(questionCounter,questions)
    console.log(questionCounter)
    return questionCounter
}




function startSetUp(){
    questionCounter = 0
    correctAnsCounter = 0
    incorrectAnsCounter = 0
    $('#mainHead').hide()
    $('#subHead').hide()
    $('#quiz').show()
    $('#submitButton').hide()
    startTimer()
    buttonSetup(questionCounter, questions)
    
    
}

function buttonSetup(v, list){
    for(x=0; x< 4; x++){
        z = x + 1
        
        $('#botton' + z).text(list[v].options[x])
        $('#quest').text(list[v].question)

    }


}


function endGame(){
    $('#quiz').hide()
    finalScore = correctAnsCounter
    timeLeft = i / 2
    questionCounter = 0
    correctAnsCounter = 0
    incorrectAnsCounter = 0
    $('#highscoreChart').show()
    $('mainHead').show()
    $('subHead').show()

}



function startTimer(){

    var counterBack = setInterval(function () {
    i= i-2;
    if (i > 0) {
        $('.progress-bar').css('width', i + '%');
    }
    else if(i <= 0){
        endGame()
    
    } else {
        clearInterval(counterBack);
    }

    }, 1000);
}



//allQButtons.addEventListener('click')


});
