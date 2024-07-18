import React from "react";
import "../App.css";
import { QuizData } from "../data/QuizData";
import { useState } from "react";
import QuizResult from "./QuizResult";

export default function Quiz() {
 const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setscore] = useState(0);
const [clickedQuestion, setClickedQuestion] = useState(0)  
const [showResult, setshowResult] = useState(false);


const changeQuestion = ()=>{
    updateScore();
    if(currentQuestion < QuizData.length-1){
        setCurrentQuestion(currentQuestion+1);
        setClickedQuestion(0);

}else{
setshowResult(true)
}
}

const updateScore =()=>{
if(clickedQuestion===QuizData[currentQuestion].answer){
    setscore(score+1)
}
}

const resultEverything = () =>{
    setshowResult(false);
    setClickedQuestion(0);
    setscore(0);
    setCurrentQuestion(0)
}

  return (
    <>
      <h1 className="heading">QUIZ APP</h1>
      <div className="main_container">
{
    showResult ? (
        <QuizResult score = {score} totalScore = {QuizData.length} tryAgain = {resultEverything}/>
    ):(

<>
        <div className="question text-center fs-5">
            <span>{currentQuestion+1}{'.'}</span>
            <span>{QuizData[currentQuestion].question}</span>
        </div>
        <div className=" option_container">
          {QuizData[currentQuestion].options.map((option, i) => {
            return <button key={i} 
            // className="button form-control text-center" 
            className={`button btn btn-outline-${clickedQuestion == i+1? "success":"primary"}`}
             onClick={()=>setClickedQuestion(i+1)}>{i+1} {option}{clickedQuestion == i+1?"✔️":null}</button>;
          })}
        </div>

      <button id="Next" value="Next" onClick={changeQuestion} className="btn btn-outline-primary mt-3 mb-3">Next</button>
      </>
      )}
      </div>
      
        
    </>
  );
}
