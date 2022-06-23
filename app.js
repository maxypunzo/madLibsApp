// "use strict"

(function() {
    let userInputs = []; 
    let questionArray = ["Enter Invnsion year", "Name of WWW pioneer", "what he was working on"];
    let questioncounter = 0;
    let questionTotal = 3;
    for (var i = questionArray.length; i > 0; i--) {
        userInputs.push(prompt(questionArray[questioncounter]) + `(${questionTotal} questions left)`); 
        if(userInputs[questioncounter] === ""){
            console.log("the user didn't write anything");
            break;
        }
        questionTotal -= 1;  
        console.log(questionArray[questioncounter] + `(${questionTotal} questions left)`);
        console.log(questionArray.length);
        console.log(userInputs[i]);
        // questioncounter += 1; 
        let numberOfQuestions = i; 
        // console.log("Loop count" + i);
        console.log("Question Counter" + questioncounter);
    }
  alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');
  let originalStory = `In  >${userInputs[0]}, computer pioneer  
    >${userInputs[1]} found herself working on a  >${userInputs[2]}. 
    Word got out that the team had "debugged" the  >${userInputs[2]}`;

    console.log(originalStory);
    document.write(originalStory);
    document.write(`In  >${userInputs[0]}, computer pioneer  
    >${userInputs[1]} found herself working on a  >${userInputs[2]}. 
    Word got out that the team had "debugged" the  >${userInputs[2]}`);

    // let originalStory = `In 1980, computer pioneer Tom Ben Lee found herself working on a Error. 
// Word got out that the team had "debugged" the Error`;
// ${userInputs[x]}
})();

