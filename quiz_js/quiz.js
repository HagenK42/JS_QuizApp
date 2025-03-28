let score = 0;
let currentQuestionIndex = 0;
let hintClicked = false;
let hintsUsed = 0;

let questions = [
    {
        question: 'JavaScript File Has An Extension of:',
        answers: [
            '.Java',
            '.Js',
            '.javascript',
            '.xml'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: .Js Explanation: The correct answer is ".Js" because in JavaScript, the file extension is typically ".js". This extension is used to identify files that contain JavaScript code. By convention, JavaScript files are saved with this extension to make it clear that they contain JavaScript code that can be executed by a JavaScript engine. Other file extensions listed in the options such as ".Java", ".javascript", and ".xml" are not commonly used for JavaScript files.',
        picture: '../assets/images/javacode.jpg',
    },
    {
        question: 'IsNaN() Evaluates And Argument To Determine if Given Value:',
        answers: [
            'Is Not a Null',
            'Is Not a Number',
            'Is Not a New Object',
            'None Of The Above'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Is Not a Number Explanation: The function isNaN() evaluates an argument to determine if the given value is not a number. It checks whether the argument is a numeric value or can be converted into one. If the argument is not a number, the function returns true; otherwise, it returns false.',
        picture: '../assets/images/code-1076536_1280.jpg',
    },
    {
        question: 'Function is Used To Parse a String To Int:',
        answers: [
            'Integer.Parse',
            'Parse.Int',
            'Int.Parse'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: Int.Parse Explanation: Int.Parse is the correct answer because it is a function used to convert a string representation of a number into its integer equivalent. It takes a string as input and returns the integer value. This function is commonly used in programming to convert user input or data stored as strings into integers for mathematical operations or other purposes.',
        picture: '../assets/images/javacode.jpg',
    },
    {
        question: 'Which Of The Dialog Box Display a Message And a Data Entry Field?',
        answers: [
            'Alert()',
            'Confirm()',
            'Msg()',
            'Prompt()'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: Prompt() Explanation: The prompt() function displays a dialog box that contains a message and a data entry field. This allows the user to enter information or provide a response to the prompt. The other options (alert(), confirm(), and msg()) do not display a data entry field, making prompt() the correct answer.',
        picture: '../assets/images/javacode.jpg',
    },
    {
        question: 'Event is Used To Check An Empty Text Box:',
        answers: [
            'Onclick()',
            'OnFocus()',
            'OnBlur()'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: OnBlur() Explanation: The onBlur() event is used to check if a text box is empty. This event is triggered when the user moves away from the text box, indicating that they have finished entering text. By using the onBlur() event, developers can validate the input and display an error message if the text box is empty. The other options, onclick() and onFocus(), do not specifically check for an empty text box. Therefore, the correct answer is onBlur().',
        picture: '../assets/images/javacode.jpg',
    },
    {
        question: 'Method Prompt() Contain ______ Number of Parameters.',
        answers: [
            'One',
            'Two',
            'Three',
            'Zero'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Two Explanation: The method Prompt() contains two parameters.',
        picture: '../assets/images/javacode.jpg',
    },
    {
        question: 'GetMonth() returns The Month as:',
        answers: [
            'Int',
            'Float',
            'Char',
            'String'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Int Explanation: The getMonth() function in programming languages such as Java or JavaScript returns the month as an integer. This means that the function will provide the numerical representation of the month, typically ranging from 0 to 11, where 0 represents January and 11 represents December. Using an integer to represent the month allows for easier manipulation and comparison of dates within a program.',
        picture: '../assets/images/javacode.jpg',
    },
    {
        question: 'If Button is clicked ______ Event Handler is invoked.',
        answers: [
            'OnSubmit()',
            'OnLoad()',
            'IsPostBack()',
            'Onclick()'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: Onclick() Explanation: When a button is clicked, the event handler associated with it is invoked. In this case, the correct answer is "Onclick()" because it is the event that is triggered when the button is clicked. The other options, "OnSubmit()", "OnLoad()", and "IsPostBack()" are not relevant in this context as they are not specific to button clicks.',
        picture: '../assets/images/javacode.jpg',
    },
    {
        question: 'A Function Associated With An object is Called:',
        answers: [
            'Method',
            'Function',
            'Link'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Method Explanation: A function associated with an object is called a method. In object-oriented programming, a method is a behavior that an object can perform. It is defined within a class and can access and manipulate the data of the object it belongs to. Methods are used to encapsulate related functionality and provide a way to interact with objects. They are called using the dot notation, where the object name is followed by the method name.',
        picture: "../assets/images/javacode.jpg",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            'Js',
            'JavaScript',
            'script',
            'scripting'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: Script Explanation: JavaScript code is typically placed within the <script> element in HTML documents. This element is used to define client-side JavaScript code that interacts with the HTML content of a webpage. It can be placed either in the <head> or <body> section of the HTML document.',
        picture: "../assets/images/javacode.jpg",
    },
];

let questionsCount = questions.length;

function displayQuestion() {

    hideExplanation();

    if(currentQuestionIndex >= questions.length) {
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score-final').textContent = (score -= hintsUsed) + '/' + questionsCount;
        document.getElementById('explanation').hidden = true;
        return;
    };

    let question = questions[currentQuestionIndex];

    document.getElementById('score-live').textContent = score;

    document.getElementById('questionPicture').style.backgroundImage = `url(${question.picture})`;
    document.getElementById('questionPicture').style.backgroundSize = 'cover';

    document.getElementById('question').textContent = question.question;

    let answersDiv = document.getElementById('answers');

    answersDiv.innerHTML = '';

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add('btn-answer');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
};

displayQuestion();

function checkAnswer(userAnswer) {
    let correctAnswer = questions[currentQuestionIndex].correctAnswerIndex;
    if(userAnswer == correctAnswer) {
        score += 1;
    };

    nextQuestion();
};

function nextQuestion() {
    currentQuestionIndex += 1;
    hintClicked = false;
    displayQuestion();
};

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    displayQuestion();
};

function restartQuizFinal() {
    score = 0;
    currentQuestionIndex = 0;
    hintClicked = false;
    hintsUsed = 0;
    document.getElementById('quiz-container').hidden = false;
    document.getElementById('result').hidden = true;
    document.getElementById('explanation').hidden = false;
    displayQuestion();
};
/*
function previousQuestion() {
    if(currentQuestionIndex > 0) {
        currentQuestionIndex -= 1;
        displayQuestion();
    };
};
*/
function showExplanation() {
    document.getElementById('explanation').textContent = questions[currentQuestionIndex].explanation;
    hintClicked = true;
    hintsUsed += 1;
}

function hideExplanation() {
    document.getElementById('explanation').textContent = 'Hint';
}

function showMenu() {
    score = 0;
    currentQuestionIndex = 0;
    hintClicked = false;
    hintsUsed = 0;
    document.getElementById('mainmenu').hidden = false;
    document.getElementById('quiz-container').hidden = true;
    document.getElementById('result').hidden = true;
    document.getElementById('explanation').hidden = true;
}

function hideMenu() {
    document.getElementById('mainmenu').hidden = true;
    document.getElementById('quiz-container').hidden = false;
    document.getElementById('result').hidden = true;
    document.getElementById('explanation').hidden = false;
    displayQuestion();
}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    hintClicked = false;
    hintsUsed = 0;
    document.getElementById('mainmenu').hidden = true;
    document.getElementById('quiz-container').hidden = false;
    document.getElementById('result').hidden = true;
    document.getElementById('explanation').hidden = false;
    displayQuestion();
}