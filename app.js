// "use strict"

(function() {
    let userInputs = []; // array to store user answer
    let questionArray = ["Eneter year", "Name f Computer pioneer", "what he was working on"];
    let questioncounter = 0;
    for (var x = questionArray.length; x > 0; x--) {
        userInputs[x] = prompt(questionArray[x]); //prompt each replacement
        console.log(questionArray[x]);
        console.log(x);
        questioncounter += 1; // increament by 1;
    }
    console.log(userInputs);
})();

for (let x = 0; x < 3; x++) {
    let originalStory = `In  >${userInputs[0]} /*templet literal*/, computer pioneer  
    >${userInputs[1]} found herself working on a  >${userInputs[2]}. 
    Word got out that the team had "debugged" the  >${userInputs[2]}`;
    console.log(originalStory);
    let numberOfQuestions = x; //number of unique replacements
}

// let originalStory = `In 1980, computer pioneer Tom Ben Lee found herself working on a Error. 
// Word got out that the team had "debugged" the Issue`;
// ${userInputs[x]}

