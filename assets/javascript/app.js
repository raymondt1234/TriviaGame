
let questions = [
    {
        question: "A 1998 study suggests that which of the following explorers reached the North Pole?",
        answers: [
            "Roald Amundsen",
            "Robert E. Peary",
            "William Barents",
            "Adam Sound"
        ],
        correctAnswer: "Robert E. Peary"
    },
    {
        question: "History students are taught about the \"the fall of Constantinople\" in 1453. to who did it fall?",
        answers: [
            "Christian crusaders",
            "Mongol hordes",
            "Ottoman Turks",
            "Romans"
        ],
        correctAnswer: "Ottoman Turks"
    },
    {
        question: "Catherine the Great ruled what country?",
        answers: [
            "England",
            "France",
            "Germany",
            "Russia"
        ],
        correctAnswer: "Russia"
    },
    {
        question: "What was the next state after the original 13 to be admitted to the United States?",
        answers: [
            "Florida",
            "Kentucky",
            "Vermont",
            "West Virginia"
        ],
        correctAnswer: "Vermont"
    },
    {
        question: "Which of these four wise men died before the other three were born?",
        answers: [
            "Confucius",
            "Plato",
            "Jesus",
            "Solomon"
        ],
        correctAnswer: "Solomon"
    },
    {
        question: "The Creoles of today's New Orleans are descended from whom?",
        answers: [
            "French Canadians from Nova Scotia",
            "French and Spanish settlers who lived in the city",
            "refugees from the Crimean War",
            "none of the above"
        ],
        correctAnswer: "French and Spanish settlers who lived in the city"
    },
    {
        question: "George Washington is called the father of our country, but how many kids did Mr. Washington really have?",
        answers: [
            "0",
            "1",
            "3",
            "7"
        ],
        correctAnswer: "0"
    },
    {
        question: "William Rehnquist as chief justice of the Supreme Court was preceded by whom?",
        answers: [
            "Earl Warren",
            "Abe Fortas",
            "Warren Burger",
            "Clarence Thomas"
        ],
        correctAnswer: "Warren Burger"
    },
    {
        question: "What were the first names of the famous explorers Lewis and Clark?",
        answers: [
            "Clark and Lewis",
            "John and Lincoln",
            "Benjamin and Samuel",
            "Meriwether and William"
        ],
        correctAnswer: "Meriwether and William"
    },
    {
        question: "Manuel Noriega took refuge in whose embassy after the U.S. invasion of Panama City in 1989?",
        answers: [
            "Cuba",
            "Switzerland",
            "Vatican City",
            "Nicaragua"
        ],
        correctAnswer: "Vatican City"
    },
    {
        question: "On the island nation formerly known as Ceylon, Tamil separatists have been conducting attacks against the Sinhalese majority. what is the name of the country?",
        answers: [
            "Cyprus",
            "Seychelles",
            "Madagascar",
            "Sri Lanka"
        ],
        correctAnswer: "Sri Lanka"
    },
    {
        question: "Where was the UN headquarters located prior to them moving to Manhattan's East Side?",
        answers: [
            "San Francisco",
            "Long Island, New York",
            "Geneva, Switzerland",
            "Paris, France"
        ],
        correctAnswer: "Long Island, New York"
    },
    {
        question: "Which American commander said, \"I have not yet begun to fight\"?",
        answers: [
            "David Farragut",
            "John Paul Jones",
            "George Dewey",
            "Oliver Hazard Perry"
        ],
        correctAnswer: "John Paul Jones"
    },
    {
        question: "John Brown of Civil War fame was which?",
        answers: [
            "an abolitionist",
            "a slave",
            "a slave-owner",
            "none of the above"
        ],
        correctAnswer: "an abolitionist"
    },
    {
        question: "At the time of the Declaration of Independence what was the approximate  population of the United States?",
        answers: [
            "20,000",
            "200,000",
            "2,000,000",
            "20,000,000"
        ],
        correctAnswer: "2,000,000"
    },
    {
        question: "What frontier marshal was murdered in 1876 in Deadwood, South Dakota, by outlaw Jack McCall?",
        answers: [
            "Buffalo Bill Cody",
            "Matt Dillon",
            "Wild Bill Hickok",
            "Bat Masterson"
        ],
        correctAnswer: "Wild Bill Hickok"
    },
    {
        question: "In what year did Wyatt Earp die?",
        answers: [
            "1879",
            "1889",
            "1909", "1929"
        ],
        correctAnswer: "1929"
    },
    {
        question: "In what year did Leonard Kristensen of Norway lead the first party to land on the mainland of Antarctica?",
        answers: [
            "1795",
            "1845",
            "1895",
            "1945"
        ],
        correctAnswer: "1895"
    },
    {
        question: "Three of the four following events took place in 1985, which one happened in 1982?",
        answers: [
            "Mikhail Gorbachev became the leader of the Soviet Union",
            "Pete Rose broke Ty Cobb's record of 4,191 career hits.",
            "Coca Cola replaced its formula to create a \"new\" Coke.",
            "Britain and Argentina fought a war over the Falkland Islands."
        ],
        correctAnswer: "Britain and Argentina fought a war over the Falkland Islands."
    },
    {
        question: "Namibia became a colony of what European nation in 1890, under the name South-West Africa?",
        answers: [
            "Germany",
            "Great Britain",
            "The Netherlands",
            "Portugal"
        ],
        correctAnswer: "Germany"
    }
]

function showQuestion(question) {
    let questionDisplay = $("<h2>");

    questionDisplay.html(question.question);
    $("#question").append(questionDisplay);

    let answersButtons = $("<div>");
    answersButtons.addClass("btn-group-vertical container-fluid");

    question.answers.forEach(function (answer) {
        let button = $("<button>");

        button.addClass("answer btn btn-light");
        button.html(answer);

        answersButtons.append(button);
    });

    $("#answers").append(answersButtons);
}
function startTimer() {
    clearTimeout(timer);
    timer = setInterval(function () {
        let timeStr = "";
        if (time < 10) {
            if (time > 0) {
                timeStr = "0" + time;
                $("#timer").html(`<h2>Time remaining: ${timeStr}</h2>`);
            } else {
                // clearTimeout(timer);
                timeStr = "00";
                $("#timer").html(`<h2>Time remaining: ${timeStr}</h2>`);
                showCorrectAnswer(false);
            }
        } else {
            timeStr = time;
            $("#timer").html(`<h2>Time remaining: ${timeStr}</h2>`);
        }
        
        time--;

    }, 1000);
}
function showCorrectAnswer(isCorrect) {
    let answer = questions[questionNum].correctAnswer;
    let localTimer = 3;
    let countdown;

    $("#timer").html("");
    clearTimeout(timer);


    $("#question").html("");

    if (isCorrect) {
        $("#answers").html(`<h2>Correct! the answer is ${answer}</h2>`);
    } else {
        $("#answers").html(`<h2>Wrong... the correct answer is ${answer}</h2>`);
    }

    countdown = setInterval(function () {
        let timeStr = "";

        if (localTimer > 0) {
            timeStr = "0" + localTimer;
            $("#timer").html(`<h2>Time until next question: ${timeStr}</h2>`);
        } else {
            clearTimeout(countdown);
            timeStr = "00";
            $("#timer").html(`<h2>Time until next question: ${timeStr}</h2>`);
            nextQuestion();
        }
        
        localTimer--

    }, 1000);

    
}
function nextQuestion() {
    $("#question").html("");
    $("#answers").html("");

    time = 30;
    questionNum++;

    if (questionNum < 20) {
        startTimer();
        showQuestion(questions[questionNum]);
    }
}

let timer;
let time = 30;
let numCorrect = 0;
let questionNum = 0;


$(document).ready(function () {
    startTimer();
    showQuestion(questions[questionNum]);

    $(document).on("click", ".answer", function () {
        let isCorrect = false;

        $("#question").html("");

        if ($(this).text() === questions[questionNum].correctAnswer) {
            numCorrect++;
            isCorrect = true;
        }

        showCorrectAnswer(isCorrect);
    });
});