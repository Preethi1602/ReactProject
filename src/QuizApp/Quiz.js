import React, { useState, useContext } from "react";
import { Question } from "./Qusetion";
import { QuizContext } from "./QuizApp";
import './style.css'

const Quiz = () => {
    const { score, setscore, gamestate, setgamestate,option, setoption} = useContext(QuizContext)
    const [currentquestion, setcurrentquestion] = useState(0);
   // const [option, setoption] = useState("")

    const nextquestion = () => {
         console.log(option[currentquestion])
        if (Question[currentquestion].answer == option[currentquestion]) {
            setscore(score + 1)
            
        }
        //alert(score)
        setcurrentquestion(currentquestion + 1)
    }
    const finishquiz = () => {
        if (Question[currentquestion].answer == option[currentquestion]) {
            setscore(score + 1)
        }
        //alert(score)
        setgamestate("result")
    }
    const previousquestion=()=>{
        setcurrentquestion(currentquestion - 1)
    }
    return (
        <div className="Quiz" style={{
            height: "450px",
            borderRadius: "10px",
            backgroundColor: "turquoise",
            textAlign: "center",
            marginTop:"20px"
        }}>
            <h2 style={{ color: "blue", padding: "20px" }}>{Question[currentquestion].Question}</h2>
            <div className="options" style={{ display: "flex", flexDirection: "column", padding: "20px 100px 30px 100px" }}>
                <button onClick={() => setoption([...option,"option A"])} style={{ padding: "10px", border: "none", margin: "5px" }} className="btn-bg">{Question[currentquestion].optionA}</button>
                <button onClick={() => setoption([...option,"option B"])} style={{ padding: "10px", border: "none", margin: "5px" }} className="btn-bg">{Question[currentquestion].optionB}</button>
                <button onClick={() => setoption([...option,"option C"])} style={{ padding: "10px", border: "none", margin: "5px" }} className="btn-bg">{Question[currentquestion].optionC}</button>
                <button onClick={() => setoption([...option,"option D"])} style={{ padding: "10px", border: "none", margin: "5px" }} className="btn-bg">{Question[currentquestion].optionD}</button>
            </div>
            
            {currentquestion==0 ? ("") 
            :(
                <button onClick={previousquestion} style={{ padding: "10px",marginRight:"20px", border: "none",backgroundColor:"lightpink" }}>Previous Question</button>
            )}
           
            {currentquestion == Question.length - 1 ? (
                <button onClick={finishquiz} style={{ padding: "10px", border: "none" ,backgroundColor:"lightgreen"}}>Finish Quiz</button>
            ) : (
                <button onClick={nextquestion} style={{ padding: "10px", border: "none",backgroundColor:"coral" }}>Next Question</button>
            )}

        </div>
    )
}
export default Quiz