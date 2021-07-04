let quize = [
            {
              question:"Who is your Dipak ?? ",
              a : "Best Friend",
              b : "HeartBeat",
              c : "Mayalu",
              d : "Sathi ",
              ans : "ans2"
            },
            {
                question:"Whice is your Favourite place ?? ",
                a : "Dang",
                b : "Kathmandu",
                c : "Pokhara",
                d : "Lumbini ",
                ans : "ans3"
              },
              {
                question:"Why are you love me ?? ",
                a : "Handsome ",
                b : "cute",
                c : "Innocent",
                d : "Heart/ Maan ",
                ans :  "ans4"
              },
              {
                question:"Why are you wanna breakup with me ? ",
                a : "I'm Dirty talk to you ",
                b : "I'm So ugly",
                c : "You have a another guy",
                d : "You don't want to me ",
                ans : "ans4"
              },
              {
                question:"Your Favourite Color? ",
                a : "Black ",
                b : "Green",
                c : "Blue",
                d : "Red ",
                ans : "ans1"
              },
              {
                question:" kaha Sabai vanda dherai time bitako pal is favourite?? ",
                a : "Tour",
                b : "Vauju ghar",
                c : "River",
                d : "Devikote",
                ans :  "ans3"
              },
              {
                question:"Do you have still feeling for me??",
                a :"Yes",
                b : "No",
                c : "Sathi ko Rup ma ",
                d : "Man xain aba ta sanga maya launa..",
                ans : "ans1"
              },
];

//============================= References ===============================//
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore')
let score = 0;
let questionCount = 0;
const loadQuestion = () =>{
            const questionList = quize[questionCount];
            question.innerText = questionList.question;
            option1.innerText = questionList.a;
            option2.innerText = questionList.b;
            option3.innerText = questionList.c;
            option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () =>{
  let answer;

  answers.forEach((currAnsEle) =>{
    if(currAnsEle.checked){
      answer = currAnsEle.id;
    }
  });
  return answer;
}

const deleteSelect = () =>{
  answers.forEach((curAnsElement) =>{
    curAnsElement.checked = false;
  })
}


submit.addEventListener('click', () =>{
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if(checkedAnswer === quize[questionCount].ans){
    score++;
  };
  questionCount++;

  deleteSelect();
  if(questionCount < quize.length){
    loadQuestion();
  }else{
    showScore.innerHTML = `
    <h3>Your Score ${score}/${quize.length} <h3>
    <button class = "btn" onclick = "location.reload()">Play Again</button>
    `;
    showScore.classList.remove('scoreArea');
  }
});