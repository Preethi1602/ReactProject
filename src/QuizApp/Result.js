import React, { useContext } from "react";
import { QuizContext } from "./QuizApp";
import { Question } from "./Qusetion";

const Result = () => {
    const { score, setscore, setgamestate, Name ,option,setoption} = useContext(QuizContext)
    const restart = () => {
        setscore(0)
        setoption("")
        setgamestate("menu")
    }
    const review=()=>{
        setgamestate("review")
    }

    return (
        <div className="Result" style={{
            height: "400px",
            borderRadius: "10px",
            backgroundColor: "turquoise",
            textAlign: "center",
            padding: "50px",
            marginTop:"30px"
        }}>
            <h1 style={{ color: "green" }}>Congratulations {Name} you made it..!</h1>
            <h2 style={{ color: "blue" }}> Your Score : {score} /{Question.length}</h2>
            <button onClick={review} style={{ border: "none", padding: "10px", margin: "10px",backgroundColor:"pink" }}>Review</button>
            <button onClick={restart} style={{ border: "none", padding: "10px", margin: "10px",backgroundColor:"lightsalmon" }}>Restart Quiz</button>
        </div>
    )
}
export default Result