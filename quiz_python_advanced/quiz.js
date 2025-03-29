let score = 0;
let currentQuestionIndex = 0;
let hintClicked = false;
let hintsUsed = 0;

let questions = [
    {
        question: 'What gets printed (with python version 3.X) assuming the user enters the following at the prompt? #: foo  a = input("#: ")   print a',
        answers: [
            'F',
            'Foo',
            'Not a Number',
            'An exception is thrown'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Foo Explanation: The correct answer is "foo". This is because the user input is assigned to the variable "a" using the input() function. The input() function reads a line of text from the user and returns it as a string. Therefore, when the value "foo" is entered at the prompt, it is stored in the variable "a". The print statement then outputs the value of "a", which is "foo".',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'What gets printed? class NumFactory:     def __init__(self, n):         self.val = n     def timesTwo(self):         self.val *= 2     def plusTwo(self):         self.val += 2   f = NumFactory(2) for m in dir(f):     mthd = getattr(f,m)     if callable(mthd):         mthd()   print f.val',
        answers: [
            '4',
            '6',
            '8',
            'An exception is thrown'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: An exception is thrown Explanation: The code creates an instance of the NumFactory class with an initial value of 2. It then iterates over the methods of the instance using the dir() function. For each method, it checks if the method is callable using the callable() function. If the method is callable, it calls the method. However, the code does not handle the case where the method does not exist, which results in an exception being thrown. Therefore, the correct answer is that an exception is thrown.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'What gets printed? def print_header(str):     print "+++%s+++" % str     print_header.category = 1 print_header.text = "some info"   print_header("%d %s" %  \ (print_header.category, print_header.text))',
        answers: [
            '+++1 some info+++',
            '+++%s+++',
            '1',
            'Some info'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: +++1 some info+++ Explanation: The function print_header is defined with a parameter "str". Inside the function, it prints "+++" followed by the value of "str" followed by "+++". Then, the function is assigned two attributes: "category" with a value of 1 and "text" with a value of "some info". Finally, the function is called with the arguments "%d %s" % (print_header.category, print_header.text). This will substitute the values of "print_header.category" and "print_header.text" into the string and print it. Therefore, the output will be "+++1 some info+++".',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: "What gets printed? names1 = ['Amir', 'Barry', 'Chales', 'Dao'] names2 = [name.lower() for name in names1]   print names2[2][0]",
        answers: [
            'I',
            'B',
            'C',
            'D'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: C Explanation: The code creates a new list called names2, which contains all the names from names1 converted to lowercase. The expression names2[2] retrieves the third name from names2, which is "chales". The index [0] is then used to retrieve the first character of "chales", which is "c". Therefore, the correct answer is "c".',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'What gets printed? names1 = [´Amir´, ´Barry´, ´Chales´, ´Dao´]   loc = names1.index("Edward")   print loc',
        answers: [
            '0',
            '4',
            'Edward',
            'An exception is thrown'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: An exception is thrown Explanation: The code tries to find the index of the name "Edward" in the list "names1" using the index() method. However, since "Edward" is not present in the list, the index() method will raise a ValueError exception. Therefore, the correct answer is "An exception is thrown".',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'Assuming the filename for the code below is /usr/lib/python/person.py and the program is run as:  python /usr/lib/python/person.py  What gets printed? class Person:     def __init__(self):         pass       def getAge(self):         print __name__   p = Person() p.getAge()',
        answers: [
            'Person',
            'GetAge',
            'Usr.lib.python.person',
            '__main__'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: __main__ Explanation: The code defines a class called Person with an empty constructor and a method called getAge that prints the value of __name__. When the code is run, an instance of the Person class is created and the getAge method is called on that instance. Since the code is being run directly as the main script, the value of __name__ is "__main__", so that is what gets printed.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: "What gets printed? import re sum = 0   pattern = 'back' if re.match(pattern, 'backup.txt'):     sum += 1 if re.match(pattern, 'text.back'):     sum += 2 if re.search(pattern, 'backup.txt'):     sum += 4 if re.search(pattern, 'text.back'):     sum += 8   print sum",
        answers: [
            '7',
            '13',
            '14',
            '15'
        ],
        correctAnswerIndex: 1,
        explanation: "Correct Answer: 13 Explanation: The pattern 'back' is matched in both 'backup.txt' and 'text.back' using re.search(). Therefore, sum is increased by 4 and 8, resulting in a final value of 12.",
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'What gets printed? class parent:     def __init__(self, param):         self.v1 = param   class child(parent):     def __init__(self, param):         self.v2 = param   obj = child(11) print "%d %d" % (obj.v1, obj.v2)',
        answers: [
            'None None',
            'None 11',
            '11 None',
            'Error is generated by the program'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: Error is generated by program Explanation: The code will generate an error because the child class does not have an explicit call to the parent class´s constructor. As a result, the parent class´s constructor is not called and the variable "v1" is not initialized. Therefore, when trying to print "obj.v1", an error is generated.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'What gets printed? x = True y = False z = False   if not x or y:     print 1 elif not x or not y and z:     print 2 elif not x or y or not y and x:     print 3 else:     print 4',
        answers: [
            '1',
            '2',
            '3',
            '4'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: 3 Explanation: The code first checks the condition "not x or y" which evaluates to True since x is True and y is False. Therefore, the code executes the corresponding print statement and prints 1. The other conditions are not checked because the first condition is True.',
        picture: '../assets/images/code-1076536_1280_ergebnis.webp',
    },
    {
        question: 'In python 2.6 or earlier, the code will print error type 1 if accessSecureSystem raises an exception of either AccessError type or SecurityError type try:   accessSecureSystem() except AccessError, SecurityError:   print "error type 1"   continueWork()',
        answers: [
            'True',
            'False'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: False Explanation: The code will not print "error type 1" if accessSecureSystem raises an exception of either AccessError type or SecurityError type. The correct answer is false because the except statement should specify the exception types separately using the "as" keyword, like "except AccessError as e, SecurityError as se:".',
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
        document.getElementById('hint-description').hidden = true;
        return;
    };

    let question = questions[currentQuestionIndex];

    document.getElementById('score-live').textContent = score;
    document.getElementById('question-live').textContent = currentQuestionIndex + '/' + questionsCount;

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