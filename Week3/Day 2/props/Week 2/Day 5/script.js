const mcqData = [
    {
        Question: "What does HTML stands for?",
        Options: [
            "Hyper Text Markup Language",
            "Hyper Tranfer Markup Language",
            "Hyper Text Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
    },
    {
        Question: "Name the first indeginous fighter aircraft of India.",
        Options: [
            "Sukhoi",
            "Tejas",
            "Typhoon",
            "Mirage",
        ],
        correct: 1,
    },
    {
        Question: "Which css property is used to control the spacing between the elements? ",
        Options: [
            "Margin",
            "Padding",
            "Spacing",
            "Border-spacing",
        ],
        correct: 1,
    },
    {
        Question: "Name the first aircraft carrier of Indian Navy.",
        Options: [
            "INS Virat",
            "INS Aridhaman",
            "INS Vikrant",
            "INS Vikramaditya",
        ],
        correct: 2,
    },
    {
        Question: "Which Javascript function is used to select an HTML element by its ID?",
        Options: [
            "document.Querry",
            "getElementById",
            "SelectElement",
            "findElementbyId",
        ],
        correct: 1,
    },
    {
        Question: "What is the name of India's indigenous beyond visual range air to air missile?",
        Options: [
            "Agni",
            "Rudram",
            "Prahar",
            "Astra",

        ],
        correct: 3,
    },
    {
        Question: "In React.js which hook is used to perform side effects in a function component?",
        Options: [
            "useEffect",
            "useContext",
            "useState",
            "useReducer",
        ],
        correct: 0,
    },
    {
        Question: "Name the standard rifle used by Indian Army.",
        Options: [
            "INSAS",
            "AK-47",
            "AK-203",
            "Tavor",
        ],
        correct: 2,
    },
    {
        Question: "Which HTML tag is used to create an order list?",
        Options: [
            "ul",
            "li",
            "ol",
            "dl",
        ],
        correct: 2,
    },
    {
        Question: "Name the indigenous Indian helicopter which was specially designed to fly over the  Himalayas, ",
        Options: [
            "Chinook",
            "Dhruv",
            "Prachand",
            "Apache",
        ],
        correct: 2,
    },

];


const mcq = document.querySelector('.MCQ');

const answerElements = document.querySelectorAll(".answer");

const questionElement = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submitBtn = document.querySelector("#submit");

let currentMcq = 0;
let score = 0;


const loadMcq = () => {
    const { Question, Options } = mcqData[currentMcq];

    questionElement.innerText = `${currentMcq + 1}. ${Question}`;

    option1.innerText = Options[0];
    option2.innerText = Options[1];
    option3.innerText = Options[2];
    option4.innerText = Options[3];
};


const getSelectedOption = () => {
 let selectedIndex = -1;
    answerElements.forEach((curElement, index) => {
        if (curElement.checked){
            selectedIndex = index;
        }
    });
    return selectedIndex;    
      
  };


  const deselectedAnswers = () => {
    answerElements.forEach((curElement) => curElement.checked = false);
  };

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    if (selectedOptionIndex === -1) return; 

    if (selectedOptionIndex === mcqData[currentMcq].correct) {
        score++;
    }

    currentMcq++;

    if (currentMcq < mcqData.length){
        deselectedAnswers();
        loadMcq();
    }else{
        mcq.innerHTML = `
        <div class = "result">
        <h2> Your Score : ${score}/${mcqData.length} Correct Answers </h2>
        <p>Congratulations on completing the MCQ </p>
        <button class ="reload-button" onclick = "location.reload()"> PLay Again </button>
        </div>
        `;
    }
    
});

loadMcq();