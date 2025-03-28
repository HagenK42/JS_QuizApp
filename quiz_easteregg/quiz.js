let score = 0;
let currentQuestionIndex = 0;
let hintClicked = false;
let hintsUsed = 0;

let questions = [
    {
        question: 'Otters are an endangered species.',
        answers: [
            'True',
            'False'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: True Explanation: Otters being an endangered species means that their population is at risk of becoming extinct. This could be due to various factors such as habitat loss, pollution, hunting, and climate change. The classification of otters as endangered highlights the need for conservation efforts to protect their habitats and promote their population growth.',
        picture: '../assets/images/otter-4444711_1920_ergebnis.webp',
    },
    {
        question: 'What is the average size of an otter?',
        answers: [
            '1-2 feet long, 10 pounds',
            '3-4 feet long, 25 pounds',
            '5-6 feet long, 30 pounds'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: 3-4 feet long, 25 pounds Explanation: The average size of an otter is 3-4 feet long and weighs around 25 pounds. This means that most otters fall within this size range and weight category.',
        picture: '../assets/images/otter-7609666_1920_ergebnis.webp',
    },
    {
        question: 'Tadpoles breathe through _________.',
        answers: [
            'Mouth',
            'Gills',
            'Lungs',
            'Tail'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Gills Explanation: Tadpoles breathe through gills. Unlike adult frogs, tadpoles have not developed lungs yet, so they rely on gills to extract oxygen from the water. These gills are located on the sides of their head and allow them to take in dissolved oxygen from the surrounding water. As tadpoles go through metamorphosis and develop into adult frogs, they lose their gills and develop lungs to breathe air.',
        picture: '../assets/images/frog-3312038_1920_ergebnis.webp',
    },
    {
        question: 'What organ does an adult frog use to breathe?',
        answers: [
            'Gills',
            'Spiracles',
            'Lungs',
            'Heart'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: Lungs Explanation: Adult frogs use lungs to breathe. Lungs are the main respiratory organ in frogs, allowing them to take in oxygen and release carbon dioxide. Unlike tadpoles, which have gills for breathing underwater, adult frogs have lungs that enable them to breathe in both air and water. Lungs are responsible for the exchange of gases, allowing oxygen to enter the bloodstream and carbon dioxide to be expelled. Therefore, lungs are the correct answer to the question.',
        picture: '../assets/images/frog-69813_1920_ergebnis.webp',
    },
    {
        question: 'Which is a member of the the otter family?',
        answers: [
            'Pigs',
            'Skunks',
            'Rats',
            'Bobcats'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: Skunks Explanation: Skunks are a member of the otter family because they both belong to the Mustelidae family. This family includes various carnivorous mammals, such as weasels, badgers, and otters. Skunks share similar physical characteristics and behaviors with other members of this family, such as a long body, short legs, and the ability to release a strong-smelling spray as a defense mechanism. Pigs, rats, and bobcats do not belong to the otter family and are not closely related to skunks.',
        picture: '../assets/images/otter-779458_1920_ergebnis.webp',
    },
    {
        question: 'Otters are not mammals.',
        answers: [
            'True',
            'False'
        ],
        correctAnswerIndex: 1,
        explanation: 'Correct Answer: False Explanation: This statement is false. Otters are indeed mammals. Mammals are a group of animals that have fur or hair, give birth to live young, and feed their babies with milk. Otters possess all these characteristics, making them mammals.',
        picture: '../assets/images/otter-7899480_1920_ergebnis.webp',
    },
    {
        question: 'There are _____ stages of the life cycle of a frog.',
        answers: [
            '5',
            '4',
            '3',
            '2'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: 5 Explanation: The correct answer is 5. The life cycle of a frog consists of five stages: egg, tadpole, tadpole with legs, froglet, and adult frog.',
        picture: '../assets/images/frog-7255741_1920_ergebnis.webp',
    },
    {
        question: 'The stage between a tadpole and the adult frog is called __________.',
        answers: [
            'Breeding',
            'Larva',
            'Piglet',
            'Froglet'
        ],
        correctAnswerIndex: 3,
        explanation: 'Correct Answer: Froglet Explanation: The stage between a tadpole and the adult frog is called a froglet.',
        picture: '../assets/images/frog-69813_1920_ergebnis.webp',
    },
    {
        question: 'What do tadpoles feed on?',
        answers: [
            'Insects and plants',
            'Fish food',
            'Egg yolk in their gut',
            'Plants'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct Answer: Egg yolk in their gut Explanation: Tadpoles feed on egg yolk in their gut. This is because when tadpoles hatch from eggs, they still have a yolk sac attached to their bodies. This yolk sac provides them with the necessary nutrients and energy to survive and grow. As they develop, tadpoles gradually consume and absorb the yolk, which serves as their primary source of food. Once the yolk is depleted, tadpoles start feeding on other sources such as insects and plants.',
        picture: '../assets/images/tree-frog-8600329_1920_ergebnis.webp',
    },
    {
        question: 'Amphibians are cold blooded.',
        answers: [
            'True',
            'False'
        ],
        correctAnswerIndex: 0,
        explanation: 'Correct Answer: True Explanation: Amphibians are cold-blooded animals, meaning that their body temperature is regulated by the environment around them. Unlike warm-blooded animals, such as mammals and birds, amphibians cannot generate their own body heat. Instead, they rely on external sources of heat, such as the sun or warm surfaces, to raise their body temperature. This characteristic allows amphibians to adapt to different environmental conditions and habitats. Therefore, the statement "Amphibians are cold-blooded" is true.',
        picture: '../assets/images/frog-3312038_1920_ergebnis.webp',
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