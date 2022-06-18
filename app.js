// "use strict"

(function() {
    let userInputs = [];
    for (var x = 0; x < 10; x++) {
        userInputs[x] = prompt('Enter your name');
    }
    console.log(userInputs);
})();

for (let x = 0; x < 3; x++) {
    let originalStory = `In  >${userInputs[0]}, computer pioneer  >${userInputs[1]} found herself working on a  >${userInputs[2]}. 
    Word got out that the team had "debugged" the  >${userInputs[2]}`;
    console.log(originalStory);
}

// let originalStory = `In 1980, computer pioneer Tom Ben Lee found herself working on a Error. 
// Word got out that the team had "debugged" the Issue`;
// ${userInputs[x]}

