$(document).ready(function() {
    // Handler for .ready() called.

    var selection;
    var percentScore;

    var triviaQandA = [
        {
            "question": "Creating awareness or questioning the status quo is the strategy for which stage of the customer journey?",
            "answers": ["A - Inspire", "B - Guide", "C - Captivate", "D - Persuade"],
            "correct": "A - Inspire",
            "response": "We want to INSPIRE our potential buyers to create awareness or question their status quo."
        },
        {
            "question": "How many people are typically involved in the average purchase decision today?",
            "answers": ["A - 3.4", "B - 4.5", "C - 5.4", "D - 12"],
            "correct": "C - 5.4",
            "response": "5.4 people are now typically involved in the average purchase decision today."
        },
        {
            "question": "When our prospects are exploring, what strategy should we take as sellers?",
            "answers": ["A - Inspire", "B - Guide", "C - Captivate", "D - Persuade"],
            "correct": "B - Guide",
            "response": "We want to GUIDE our potential buyers by positioning ourselves as a valuable resource."
        },
        {
            "question": "Buzzsumo and Feedly are apps that make it easier to do what?",
            "answers": ["A - Find prospects", "B - Be first and fabulous", "C - Find relevant articles to share", "D - link to our website"],
            "correct": "C - Find relevant articles to share",
            "response": "Buzzsumo and Feedly help us find relevant articles to share."
        },
        {
            "question": "Sniply is an app that makes it easier to do what?",
            "answers": ["A - Find prospects", "B - Link from an article to our landing page", "C - Share the opening of an article", "D - Create awareness"],
            "correct": "B - Link from an article to our landing page",
            "response": "We can link to our landing page and we can also link to a spark video, or the home page of our web or booking engine."
        }
    ];

    var questionIndex = 0;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    
    $("#startGame").click(function() {
        
        getQuestion();
    });

    function showProgress() {
        var currentQuestionNumber = questionIndex + 1;
        var element = $("#progress");
        element.text("Question " + currentQuestionNumber + " of " + triviaQandA.length);

    }

    function getQuestion() {
        $("#startTheGame").hide();
        $("#startGame").hide();
        $("#response").hide();
        $(".grid").show();
        $("#nextQuestion").hide();
        //interValID = setInterval(timeIt, 1000);
        selection = triviaQandA[questionIndex];
        console.log(questionIndex);
        $("#question").html(selection.question);
        console.log(question);

        for (var i = 0; i < selection.answers.length; i++) {
            btn = $("button#btn" + [i]).text(selection.answers[i]);


        }
        showProgress();
    }


    $("button").click(function() {
        var choice = $(this).text();
        checkAnswer(choice);

    });

    function checkAnswer(choice) {
        if (choice === selection.correct) {
            correctAnswer++
            $("#response").show();
            $("#response").html("Way to go!  You are correct! " + selection.response);

        } else {
            wrongAnswer++
            $("#response").show();
            $("#response").html("Oops, you are incorrect! " + selection.response);
        }

        //clearInterval(interValID);
        $("#nextQuestion").show();
       
    }
 
        $("#nextQuestion").click(function() {
            questionIndex++;
            checkEnd();
        });



    function showResults() {
        var percentScore = (correctAnswer/triviaQandA.length)*100
    

        $(".grid").hide();
        $("#resultsCorrect").show();
        $("#resultsCorrect").html("# of Correct Answers = " + correctAnswer)
        $("#resultsIncorrect").show();
        $("#resultsIncorrect").html("# of Incorrect Answers = " +
            wrongAnswer)
        $("#resultsPercent").show();
        $("#resultsPercent").html("Your score is " + percentScore + "%")
      
if (percentScore > 70) {
    var wayToGo = $("<img/>");
    wayToGo.attr("src", "images/tenorWayToGo.gif")
    $("#scoreImg").show();
    $("#scoreImg").append(wayToGo);
} else {
   var tryHarder = $("<img/>");
    tryHarder.attr("src", "images/tenorTryHarder.gif")
    $("#scoreImg").show();
    $("#scoreImg").append(tryHarder);
}
        //$("#resultsTimedOut").show();
        //$("#resultsTimedOut").html("# of Timed Out = " + timeOutAnswer );
        $("#resultsTwo").show();
    }

    function checkEnd() {
        


        if (questionIndex === (triviaQandA.length)) {
            showResults();

        } else {
            getQuestion();
        }

    }

});