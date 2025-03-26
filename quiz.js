let score = 0;
let currentQuestionIndex = 0;
let hintClicked = false;
let hintsUsed = 0;

let questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler"
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: Hyper Text Markup Language Explanation: HTML stands for Hyper Text Markup Language. It is a standard markup language used for creating and structuring the content on web pages. HTML uses tags to define elements such as headings, paragraphs, images, links, and more. These tags provide a structure and format to the content, allowing web browsers to interpret and display the information correctly. HTML is the foundation of web development and is essential for creating and designing websites.',
        picture: "./assets/images/code-1076536_1280.jpg",
    },
    {
        question: 'Does the following C++ script have errors? #include "stdafx.h" #include <iostream> using namespace std; int main() {          cout<<"Hello world"<<endl          return 0; }',
        answers: [
            "Yes",
            "No",
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Yes Explanation: The given C++ script has errors because there is a missing semicolon (;) after the cout statement.',
        picture: "./assets/images/c-code.webp",
    },
    {
        question: 'In Java, a method is a container that holds classes.',
        answers: [
            'True',
            'False',
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: False Explanation: In Java, a method is not a container that holds classes. A method is a block of code that performs a specific task and is defined within a class. It is used to encapsulate a set of instructions that can be called and executed when needed. Classes, on the other hand, are used to define objects and their properties and behaviors. Therefore, the statement that a method is a container that holds classes is incorrect.',
        picture: "./assets/images/javacode.jpg",
    },
    {
        question: '<h1>Text</h1> is the correct way of making a header in HTML.',
        answers: [
            'True',
            'False',
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: True Explanation: In HTML, the tag is used to create a header, and it is the correct way to make a header in HTML. The tag represents the highest level of heading and is typically used for main headings on a webpage. It is important to use the appropriate HTML tags to structure and format the content correctly, and in this case, using the tag for a header is the correct approach.',
        picture: "./assets/images/code-1076536_1280.jpg",
    },
    {
        question: 'Which of the following is the correct way of making a string in Java?',
        answers: [
            'String "Text";',
            "String text = 'text';",
            'String text = "text"',
            'String text = "text";',
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: String text = "text"; Explanation: The correct way of making a string in Java is by using double quotation marks. Therefore, the correct answer is "String text = "text";".',
        picture: "./assets/images/javacode.jpg",
    },
    {
        question: 'Which of the following is the correct way to use the standard namespace in C++?',
        answers: [
            'Using namespace std;',
            'Using namespace standard;',
            'Using standard namespace;',
            'Standard namespace used;',
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Using namespace std; Explanation: The correct way to use the standard namespace in C++ is by using the statement "using namespace std;". This statement allows you to access all the standard library functions and objects without having to specify the "std::" prefix every time.',
        picture: "./assets/images/c-code.webp",
    },
    {
        question: 'Is this HTML code correct? <html> <head> <title>Title</title> </head> <h1>Header</h1> <p>Paragraph</p> </html>',
        answers: [
            'Yes',
            'No',
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: No Explanation: The HTML code is not correct because the and elements should be placed inside the element, not directly inside the element.',
        picture: "./assets/images/code-1076536_1280.jpg",
    },
    {
        question: 'Is it less bytes to use:       long l = 100; then:       int i = 10;',
        answers: [
            'Yes',
            'No',
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: No Explanation: The given answer "No" is correct because both variables, long and int, occupy the same amount of memory in Java. The difference lies in the range of values they can hold. A long variable can store larger values than an int variable, but it does not necessarily use more memory. In this case, both variables are assigned small values, so they would occupy the same number of bytes.',
        picture: "./assets/images/javacode.jpg",
    },
    {
        question: 'Is this the correct way to make an object in Java? Class class = new Class();',
        answers: [
            'True',
            'False',
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: False Explanation: In Java, "Class" is a reserved keyword used for reflection to obtain metadata about classes at runtime. Therefore, naming a variable "class" may lead to confusion. A correct way to instantiate an object of a class named "Class" would be: Class className = new Class();',
        picture: "./assets/images/javacode.jpg",
    },
    {
        question: 'Is this how you import something in C++? #include <string>',
        answers: [
            'Yes',
            'No',
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Yes Explanation: In C++, the #include directive is used to import libraries or header files, and <string> is a standard C++ header file that provides functions and classes for working with strings. So, #include <string> is used to include the functionality related to strings in your C++ program.',
        picture: "./assets/images/c-code.webp",
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
    console.log('restartQuizFinal');
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
