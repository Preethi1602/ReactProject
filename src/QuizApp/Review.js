import React,{useContext} from "react";
import { Question } from "./Qusetion";
import { QuizContext } from "./QuizApp";

const Review=()=>{
    const { score, setscore, gamestate, setgamestate,option, setoption } = useContext(QuizContext)
    const restart = () => {
        setscore(0)
        setoption("")
        setgamestate("menu")
    }
    return(
        <div className="Review">
            <div className="scroll">
            <div class="card" style={{marginBottom:"10px"}}>
             <h3 >1 :{Question[0].Question}</h3>
            
             <span style={{fontSize:"18px"}}><b>A</b> : {Question[0].optionA}</span>
             <span style={{fontSize:"18px"}}><b>B</b> :{Question[0].optionB}</span>
             <span style={{fontSize:"18px"}}><b>C</b> :{Question[0].optionC}</span>
             <span style={{fontSize:"18px"}}><b>D</b> :{Question[0].optionD}</span>
             
             <p style={{color:"blue",fontSize:"18px",marginTop:"5px"}}>Your Answer : {option[0]}</p>
             <p style={{color:"green",fontSize:"18px"}}>Correct Answer : {Question[0].answer} </p>
             </div>

             <div class="card" style={{marginBottom:"10px"}}>
             <h3 >2 :{Question[1].Question}</h3>
            
             <span style={{fontSize:"18px"}}><b>A</b> : {Question[1].optionA}</span>
             <span style={{fontSize:"18px"}}><b>B</b> :{Question[1].optionB}</span>
             <span style={{fontSize:"18px"}}><b>C</b> :{Question[1].optionC}</span>
             <span style={{fontSize:"18px"}}><b>D</b> :{Question[1].optionD}</span>
             
             <p style={{color:"blue",fontSize:"18px",marginTop:"5px"}}>Your Answer : {option[1]}</p>
             <p style={{color:"green",fontSize:"18px"}}>Correct Answer : {Question[1].answer} </p>
             </div>
             
             <div class="card" style={{marginBottom:"10px"}}>
             <h3 >3 :{Question[2].Question}</h3>
            
             <span style={{fontSize:"18px"}}><b>A</b> : {Question[2].optionA}</span>
             <span style={{fontSize:"18px"}}><b>B</b> :{Question[2].optionB}</span>
             <span style={{fontSize:"18px"}}><b>C</b> :{Question[2].optionC}</span>
             <span style={{fontSize:"18px"}}><b>D</b> :{Question[2].optionD}</span>
             
             <p style={{color:"blue",fontSize:"18px",marginTop:"5px"}}>Your Answer : {option[2]}</p>
             <p style={{color:"green",fontSize:"18px"}}>Correct Answer : {Question[2].answer} </p>
             </div>

             <div class="card" style={{marginBottom:"10px"}}>
             <h3 >4 :{Question[3].Question}</h3>
            
             <span style={{fontSize:"18px"}}><b>A</b> : {Question[3].optionA}</span>
             <span style={{fontSize:"18px"}}><b>B</b> :{Question[3].optionB}</span>
             <span style={{fontSize:"18px"}}><b>C</b> :{Question[3].optionC}</span>
             <span style={{fontSize:"18px"}}><b>D</b> :{Question[3].optionD}</span>
             
             <p style={{color:"blue",fontSize:"18px",marginTop:"5px"}}>Your Answer : {option[3]}</p>
             <p style={{color:"green",fontSize:"18px"}}>Correct Answer : {Question[3].answer} </p>
             </div>

             <div class="card" style={{marginBottom:"10px"}}>
             <h3 >5 :{Question[4].Question}</h3>
            
             <span style={{fontSize:"18px"}}><b>A</b> : {Question[4].optionA}</span>
             <span style={{fontSize:"18px"}}><b>B</b> :{Question[4].optionB}</span>
             <span style={{fontSize:"18px"}}><b>C</b> :{Question[4].optionC}</span>
             <span style={{fontSize:"18px"}}><b>D</b> :{Question[4].optionD}</span>
             
             <p style={{color:"blue",fontSize:"18px",marginTop:"5px"}}>Your Answer : {option[4]}</p>
             <p style={{color:"green",fontSize:"18px"}}>Correct Answer : {Question[4].answer} </p>
             </div>
             </div>
             <button onClick={restart} style={{ border: "none", padding: "10px", margin: "10px",backgroundColor:"lightsalmon" }}>Restart Quiz</button>
        </div>
    )
}
export default Review