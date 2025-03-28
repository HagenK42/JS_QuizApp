let score = 0;
let currentQuestionIndex = 0;
let hintClicked = false;
let hintsUsed = 0;

let questions = [
    {
        question: 'Which of these is not absent in HTML?',
        answers: [
            'Tags',
            'Source file',
            'Tracking systems',
            'Fat links'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Tags Explanation: HTML is a markup language that uses tags to structure and format content. Tags are an essential part of HTML and are used to define elements such as headings, paragraphs, links, images, etc. Therefore, the correct answer is "Tags" as they are present in HTML and not absent. The other options, such as source file, tracking systems, and fat links, are not inherent components of HTML.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which of these does not support the earlier release of HTML?',
        answers: [
            'Opera',
            'Chrome',
            'Safari',
            'Edge'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: Safari Explanation: Safari does not support the earlier release of HTML.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which of these refers to HTML 4.0?',
        answers: [
            'Wilbur',
            'Frameset',
            'Strict',
            'HTML Rattle'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Frameset Explanation: Frameset refers to HTML 4.0. HTML 4.0 introduced the element, which allowed web developers to create web pages with multiple independent sections called frames. Each frame could contain a separate HTML document, allowing for more complex layouts and interactive content. The Frameset option is the correct answer because it is the only choice that directly relates to the HTML 4.0 specification.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'How many subspecifications are in XHTML 1.0?',
        answers: [
            '3',
            '4',
            '5',
            '6'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: 3 Explanation: XHTML 1.0 consists of three subspecifications, namely XHTML 1.0 Strict, XHTML 1.0 Transitional, and XHTML 1.0 Frameset. These subspecifications define different sets of rules and guidelines for creating web pages using XHTML. Each subspecification has its own specific features and restrictions, allowing web developers to choose the one that best suits their needs and requirements.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which of these is not a subspecification of HTML?',
        answers: [
            'WSC XHTML',
            'Frameset',
            'Strict',
            'Transitional'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: WSC XHTML Explanation: The correct answer is A. WSC XHTML. This option is not a recognized subspecification of HTML. The other options (Frameset, Strict, and Transitional) are well-known subspecifications of HTML that define specific features and rules for constructing HTML documents.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which of these versions of HTML 4 is called Loose?',
        answers: [
            'Frameset',
            'Transitional',
            'Parser',
            'Strict'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Transitional Explanation: HTML 4 defines three versions: Frameset, Transitional, and Strict. Each version has different rules regarding the use of deprecated elements and attributes. The Transitional version of HTML 4, often referred to as "Loose," allows for a transitional period during which deprecated elements and attributes are still supported. This version permits the use of older HTML features while encouraging migration to more modern practices. Therefore, the correct answer is Transitional.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'What method of writing HTML emphasizes the meaning of encoded information over presentation?',
        answers: [
            'XHTML method',
            'Semantic HTML',
            'Nominal HTML',
            'Deductive HTML'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Semantic HTML Explanation: Semantic HTML is a method of writing HTML that emphasizes the meaning of encoded information over presentation. It focuses on using HTML elements that accurately describe the content they enclose, making it easier for search engines and assistive technologies to understand the structure and purpose of the content. By using semantic HTML, developers can create websites that are more accessible, maintainable, and future-proof.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which of these is not associated with HTML?',
        answers: [
            'Python',
            'JavaScript',
            'CSS',
            'Ruby'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Python Explanation: Python is a programming language that is not directly associated with HTML. HTML is a markup language used for creating web pages, while Python is often used for backend programming or scripting tasks. JavaScript and CSS, on the other hand, are both closely related to HTML and are commonly used in web development to enhance the functionality and styling of web pages. Ruby is also not directly associated with HTML, but it can be used in web development through frameworks like Ruby on Rails.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which of these cannot be manipulated by HTML?',
        answers: [
            'Site cookies',
            'Browser security',
            'Browser settings',
            'Cookies'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: Browser settings Explanation: HTML is a markup language used for creating web pages, and it primarily focuses on the structure and presentation of the content. While HTML can interact with certain aspects of a web browser, such as cookies, it does not have direct control over the browser settings. Browser settings are typically controlled by the user or the browser itself, and HTML cannot manipulate them. Therefore, browser settings cannot be manipulated by HTML.',
        picture: '../assets/images/javacode_ergebnis.webp',
    },
    {
        question: 'Which of these is not a looser content model?',
        answers: [
            'Item',
            'Body',
            'Blockquote',
            'Form'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: Item Explanation: The options given in the question are item, body, blockquote, and form. Out of these options, "item" is not a looser content model. The term "looser content model" refers to the HTML5 content models that allow elements to be placed in various locations within the DOM hierarchy. However, "item" is not a recognized HTML5 element or content model, making it the correct answer.',
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