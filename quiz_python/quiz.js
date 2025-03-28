let score = 0;
let currentQuestionIndex = 0;
let hintClicked = false;
let hintsUsed = 0;

let questions = [
    {
        question: 'You have the following code segment: testValue = 2 testValue = 10 + (testValue * 2) What is the value of testValue?',
        answers: [
            '10',
            '12',
            '14',
            '2'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: 14 Explanation: The code segment assigns the value 2 to the variable testValue. Then, it calculates the value of testValue as 10 plus the product of testValue (which is 2) and 2. Therefore, the value of testValue is 14.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'Which piece of code shows a new class Spam inheriting from Egg?',
        answers: [
            'Class Egg(Spam):',
            'Class Spam(Egg):',
            'Class (Spam)Egg:'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Class Spam(Egg): Explanation: The correct answer is "class Spam(Egg):". This code snippet demonstrates the creation of a new class called "Spam" that inherits from the existing class "Egg". This is indicated by the use of parentheses and the name of the parent class "Egg" following the class name "Spam".',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'You have the following code segment: myValue = “yes” if myValue != “yes” :     print(“Hello”) print(“World”) What is the output from this code?',
        answers: [
            'World Hello',
            'Hello World',
            'Hello',
            'World'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: World Explanation: The output from this code is "World". The code assigns the value "yes" to the variable myValue. The if statement checks if myValue is not equal to "yes", which is false. Therefore, the code inside the if statement, which is to print "Hello", is not executed. After the if statement, the code prints "World".',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'You have the following code segment: currentAmount = 100 itemCost = 100 if currentAmount >= itemCost :     print(“Item Purchased”) else :     print(“Not Enough Funds”) What is the output from this code?',
        answers: [
            'Not Enough Funds',
            'Item Purchased Not Enough Funds',
            'No output is displayed',
            'Item Puchased'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: Item Puchased Explanation: The output from this code is "Item Purchased". This is because the condition in the if statement is true (currentAmount is greater than or equal to itemCost), so the code inside the if block is executed and "Item Purchased" is printed.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'What is the result of this code? def print_double(x):      print(2 * x) print_double(3)',
        answers: [
            '8',
            '6',
            '4',
            '10'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: 6 Explanation: The code defines a function called print_double that takes a parameter x. Inside the function, it multiplies x by 2 and prints the result. Then, the function is called with the argument 3. Therefore, the output of the code is the result of 2 multiplied by 3, which is 6.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'Which symbol is used to check whether two variables are the same?',
        answers: [
            '==',
            '=',
            '-',
            '|'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: == Explanation: The symbol "==" is used to check whether two variables are the same. It is an equality operator that compares the values of two variables and returns true if they are equal, and false if they are not. This symbol is commonly used in programming languages to perform conditional statements and comparisons.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'Which code segment will NOT reach its print() function?',
        answers: [
            'If ‘yes’ != ‘no’ : print(“condition met”)',
            'If ‘yes’ != ‘yes’ : print(“condition met”)',
            'If not ‘yes’ == ‘no’ : print(“condition met”)',
            'If ‘yes’ == ‘yes’ : print(“condition met”)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: If ‘yes’ != ‘yes’ : print(“condition met”) Explanation: The code segment "if ´yes´ != ´yes´ : print("condition met")" will not reach its print() function because the condition ´yes´ != ´yes´ is False, so the code inside the if statement will not be executed.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'True or False: A string can be surrounded by three sets of single quotation marks or by three sets of double quotation marks.',
        answers: [
            'True',
            'False'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: True Explanation: A string can indeed be surrounded by three sets of single quotation marks or by three sets of double quotation marks. This is known as triple quoting and is a feature in some programming languages, such as Python. Triple quoting allows for the inclusion of multiline strings without the need for escape characters. By using three sets of either single or double quotation marks, a string can span multiple lines while maintaining its integrity.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'Which line of code has the proper syntax for the print statement?',
        answers: [
            'Print( Its’ a rainy day )',
            'Print( ‘it’s a rainy day’ )',
            'Print( ‘it’s a rainy day” )',
            'Print( ‘it\’s a rainy day’ )'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: Print( ‘it\’s a rainy day’ ) Explanation: The correct line of code is "print( ‘it\’s a rainy day’ )" because it uses single quotes to enclose the string and includes an escape character (\) before the apostrophe in "it´s" to indicate that it is part of the string and not the end of the string.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'What is the result of this code? if 1 + 1 * 3 == 6:    print("Yes") else:    print("No")',
        answers: [
            'Yes',
            'No'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: No Explanation: The result of this code is "No". This is because the condition in the if statement (1 + 1 * 3 == 6) evaluates to False, so the code inside the else block is executed, which prints "No".',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
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