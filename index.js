const questions=[
  {
    question:"When is International Mother Language Day celebrated?",
    answers:[
      {text:' 21 February',correct:true},
      {text:' 23 February',correct:false},
      {text:' 16 March',correct:false},
      {text:' 06 December',correct:false},
    ]
  },
  {
    question:"Who penned the book 'Wings of Fire'?",
    answers:[
      {text:' Dr. B. R. Ambedkar',correct:false},
      {text:' Jawaharlal Nehru',correct:false},
      {text:'  APJ Abdul Kalam and Arun Tiwari.',correct:true},
      {text:' Atal Bihari Vajpayee',correct:false},
    ]
  },
  {
    question:"Who was the first Prime Minister of India?",
    answers:[
      {text:' APJ Abdul Kalam',correct:false},
      {text:' Jawaharlal Nehru',correct:true},
      {text:' Atal Bihari Vajpayee',correct:false},
      {text:' Naredra Modi',correct:false},

    ]
  },
  {
    question:" Which day is celebrated as Environment Day?",
    answers:[
      {text:' 18 March',correct:false},
      {text:' 5 Augst',correct:false},
      {text:' 5 July',correct:false},
      {text:' 5 June',correct:true},

    ]
  },
  {
    question:"Name the country which has no capital?",
    answers:[
      {text:'Iran',correct:false},
      {text:'Japan',correct:false},
      {text:'Srilanka',correct:false},
      {text:'Nauru',correct:true},


    ]
  }

];

const  questionElement=document.getElementById('question');
const  answerButtons=document.getElementById('answer-buttons');
const  nextButton=document.getElementById('next-btn');

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML='Next';
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex + 1;
  questionElement.innerHTML=questionNo+" ."+currentQuestion.question;

  currentQuestion.answers.forEach(answer=>{
    const button=document.createElement('button')
    button.innerHTML=answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener('click',selectAnswer);
  });
}
function resetState(){
  nextButton.style.display='none'
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn =e.target;
  const isCorrect=selectedBtn.dataset.correct==='true';
  if(isCorrect){
    selectedBtn.classList.add('correct');
    score++;
  }else{
    selectedBtn.classList.add('incorrect')
  }

Array.from(answerButtons.children).forEach(button=>{
  if(button.dataset.correct === 'true'){
    button.classList.add('correct')
  }
  button.disabled=true;
});
nextButton.style.display='block'
}

function showScore(){
  resetState();
  questionElement.innerHTML=`Your scored ${score} out of ${questions.length}`;
  nextButton.innerHTML='Play Again';
  nextButton.style.display='block'
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener('click',()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})

startQuiz();
