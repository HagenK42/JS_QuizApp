let score = 0;
let currentQuestionIndex = 0;
let hintClicked = false;
let hintsUsed = 0;

let questions = [
    {
        question: 'Who developed and designed TypeScript?',
        answers: [
            'Microsoft',
            'Amazon',
            'Oracle',
            'Google'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Microsoft Explanation: Microsoft is the correct answer because TypeScript was developed and designed by Microsoft. TypeScript is a programming language that is a superset of JavaScript and adds optional static typing to the language. It was first released by Microsoft in 2012 and has since gained popularity among developers for its ability to improve the development experience and provide better tooling support.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'When was the first time TypeScript was made public?',
        answers: [
            'December 2012',
            'October 2012',
            'October 2013',
            'November 2013'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: October 2012 Explanation: TypeScript was first made public in October 2012.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which of the following is the typing principle of typescript?',
        answers: [
            'Gradual',
            'Dynamic',
            'Duck',
            'All of the Above'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: All of the above Explanation: The correct answer is "All of the above". This means that all three typing principles - Gradual, Dynamic, and Duck - are applicable in TypeScript. Gradual typing allows for both static and dynamic typing within the same codebase. Dynamic typing allows for variables to be assigned different data types at runtime. Duck typing allows for objects to be considered of the same type if they have the same set of properties. Therefore, TypeScript incorporates all these principles to provide a flexible and powerful typing system.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which of the following is a filename extension for TypeScript?',
        answers: [
            '.tsx',
            '.nod',
            '.txt',
            '.tt'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: .tsx Explanation: The correct answer is .tsx. This is a filename extension commonly used for TypeScript files. TypeScript is a programming language that is a superset of JavaScript, and the .tsx extension is specifically used for files that contain TypeScript code along with JSX syntax, which is commonly used in React applications.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Among which of the following computer programming language influenced the creation of typescript?',
        answers: [
            'Java',
            'JavaScript',
            'C#',
            'All of the Above'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: All of the above Explanation: All of the above computer programming languages influenced the creation of TypeScript. TypeScript is a superset of JavaScript, so it is directly influenced by JavaScript. It also draws inspiration from Java and C#, incorporating features from both languages. The goal of TypeScript is to provide a more structured and typed approach to JavaScript development, making it easier to build large-scale applications. Therefore, all three languages have played a significant role in shaping the design and functionality of TypeScript.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'The following are backported features of typescript, except?',
        answers: [
            'Classes',
            'Methods',
            'Modules',
            'Arrow'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Methods Explanation: The given question asks for backported features of TypeScript, except for one option. The correct answer is "Methods." This means that all the other options (Classes, Modules, and Arrow) are backported features of TypeScript. A backported feature refers to a feature that is implemented in a newer version of a software or language but is made available in an older version. Therefore, in this case, methods are not a backported feature of TypeScript.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'The ________ Service powers the interactive TypeScript experience in Visual Studio, Vs Code, Sublime, the TypeScript playground and other editor.',
        answers: [
            'Typescript language',
            'TypeScript compiler',
            'Typescript main',
            'TypeScript method'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Typescript language Explanation: The TypeScript language powers the interactive TypeScript experience in various editors such as Visual Studio, Vs Code, Sublime, and the TypeScript playground. It provides the necessary tools and features for developers to write and edit TypeScript code efficiently. The language itself includes syntax, data types, and other language constructs that make it possible to write and execute TypeScript code in these editors.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'A typescript can be installed or managed through?',
        answers: [
            'Void',
            'Space',
            'Npm',
            'Tag'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: Npm Explanation: The correct package manager for TypeScript is npm (Node Package Manager). npm is a popular package manager for JavaScript and it can be used to install and manage TypeScript packages and dependencies.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which Object Oriented Terms are Supported by Typescript?',
        answers: [
            'Modulus',
            'Interface',
            'Classes',
            'All of the Above'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: All of the above Explanation: TypeScript supports all of the mentioned Object Oriented terms - Modulus, Interface, and Classes. Modulus is a mathematical operation and not directly related to Object Oriented programming. However, TypeScript supports Interfaces and Classes, which are essential components of Object Oriented programming. Therefore, the correct answer is "All of the above".',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: '________ are the way to organise code in typescript.',
        answers: [
            'Modules',
            'Classes',
            'Methods',
            'Arrows'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Modules Explanation: Modules are the way to organize code in TypeScript. They allow developers to split their code into separate files or modules, making it easier to manage and maintain. Modules help in encapsulating related functionality, promoting reusability, and providing better organization and structure to the codebase. By using modules, developers can import and export functions, classes, variables, and other entities, allowing them to create modular and maintainable applications.',
        picture: '../assets/images/javacode_ergebnis.webp',
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
    document.getElementById('hint-description').hidden = true;
    hintClicked = true;
    hintsUsed += 1;
}

function hideExplanation() {
    document.getElementById('explanation').textContent = 'Hint';
    document.getElementById('hint-description').hidden = false;
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