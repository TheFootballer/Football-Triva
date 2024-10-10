const questions = [
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "Brazil", "France", "Argentina"],
        answer: "France"
    },
    {
        question: "Who is known as 'The King of Football'?",
        options: ["Lionel Messi", "Pele", "Cristiano Ronaldo", "Diego Maradona"],
        answer: "Pele"
    },
    {
        question: "Which club has won the most UEFA Champions League titles?",
        options: ["AC Milan", "Real Madrid", "Liverpool", "Barcelona"],
        answer: "Real Madrid"
    },
    {
        question: "Who scored the most goals in a single Premier League season?",
        options: ["Sergio Agüero", "Mohamed Salah", "Alan Shearer", "Wayne Rooney"],
        answer: "Mohamed Salah"
    },
    {
        question: "What is the maximum number of players a football team can have on the field?",
        options: ["9", "10", "11", "12"],
        answer: "11"
    },
    {
        question: "Which country hosted the FIFA World Cup in 2010?",
        options: ["South Africa", "Germany", "Brazil", "Russia"],
        answer: "South Africa"
    },
    {
        question: "Who is the all-time top scorer in the UEFA Champions League?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Robert Lewandowski"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "Which player has won the most Ballon d'Or awards?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Johan Cruyff", "Alfredo Di Stefano"],
        answer: "Lionel Messi"
    },
    {
        question: "Which team won the English Premier League in 2021?",
        options: ["Liverpool", "Manchester City", "Chelsea", "Manchester United"],
        answer: "Manchester City"
    },
    {
        question: "What is the duration of a standard football match?",
        options: ["60 minutes", "70 minutes", "90 minutes", "120 minutes"],
        answer: "90 minutes"
    },
    {
        question: "Which country won the UEFA Euro 2020?",
        options: ["Italy", "England", "Portugal", "France"],
        answer: "Italy"
    },
    {
        question: "Who was the first player to score a hat-trick in the FIFA World Cup?",
        options: ["Geoff Hurst", "Pelé", "Diego Maradona", "Gerd Müller"],
        answer: "Geoff Hurst"
    },
    {
        question: "What is the name of the famous football stadium in Barcelona?",
        options: ["Old Trafford", "San Siro", "Camp Nou", "Wembley"],
        answer: "Camp Nou"
    },
    {
        question: "Which player holds the record for the most appearances in the Premier League?",
        options: ["Gareth Barry", "Ryan Giggs", "Frank Lampard", "Steven Gerrard"],
        answer: "Gareth Barry"
    },
    {
        question: "Which country has the most FIFA World Cup titles?",
        options: ["Germany", "Brazil", "Italy", "Argentina"],
        answer: "Brazil"
    },
    {
        question: "What is the name of the trophy awarded to the winner of the UEFA Champions League?",
        options: ["The Golden Boot", "The UEFA Cup", "The Champions Trophy", "The European Cup"],
        answer: "The European Cup"
    },
    {
        question: "Who is the all-time top scorer for the Brazil national team?",
        options: ["Ronaldo", "Pelé", "Neymar", "Zico"],
        answer: "Pelé"
    },
    {
        question: "Which country hosted the 2002 FIFA World Cup?",
        options: ["Japan and South Korea", "Germany", "Brazil", "South Africa"],
        answer: "Japan and South Korea"
    },
    {
        question: "Who won the Premier League Golden Boot in the 2020-2021 season?",
        options: ["Harry Kane", "Mohamed Salah", "Bruno Fernandes", "Jamie Vardy"],
        answer: "Harry Kane"
    },
    {
        question: "Who is the all time goal scorer and is often named the GOAT?",
        options: ["Lionel Messi", "Pele", "Cristiano Roanldo", "Neymar Jr"],
        answer: "Cristiano Ronaldo"
    }
];


let currentQuestionIndex = 0;
let score = 0;

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("next-button").addEventListener("click", nextQuestion);

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("start-button").style.display = "none";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => selectOption(option));
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Game Over! Your final score is: ${score}`);
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("start-button").style.display = "block";
    }
}
