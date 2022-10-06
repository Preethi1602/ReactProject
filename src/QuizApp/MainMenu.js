import React, { useContext } from "react";
import { QuizContext } from "./QuizApp";

const MainMenu = () => {
    const { gamestate, setgamestate, Name, setName } = useContext(QuizContext)
    const submit=()=>{
        setgamestate("quiz")
    }

    return (
        <div className="MainMenu" style={{
            height: "400px",
            borderRadius: "10px",
            backgroundColor: "turquoise",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px",
            marginTop:"30px"
        }}>
            <h4 style={{ color: "blue" }}>Enter your Name </h4>
            <input type="text"name="name" placeholder="Ex:Sam"  onChange={(e) =>  setName(e.target.value)}  style={{ margin: "5px", border: "none", borderRadius: "5px" }} />
            <button type="submit"onClick={submit} style={{ border: "none", padding: "10px", margin: "20px",backgroundColor:"green",color:"white" }}>Start Quiz</button>
            </div>
    )
}
export default MainMenu