import React, { createContext, useState } from "react";
import Header from "../Header";
import MainMenu from "./MainMenu";
import Quiz from "./Quiz";
import Result from "./Result";
import Review from "./Review";
import bg from "./bg.jpg"

export const QuizContext = createContext()
const QuizApp = () => {
    const [gamestate, setgamestate] = useState("menu")
    const [score, setscore] = useState(0)
    const [Name, setName] = useState("");
    const [option, setoption] = useState("")
    return (
        <div className="QuizApp" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100vw" }}>
            <Header />
            <div style={{ backgroundColor: "rgba(0,0,0,0.2)", height: "80%", width: "40%", textAlign: "center", marginTop: "20px", marginLeft: "30%", padding: "30px" }}>
                <h1>Quiz App</h1>
                <QuizContext.Provider value={{ gamestate, setgamestate, score, setscore, Name, setName ,option, setoption}}>
                    {gamestate === "menu" && <MainMenu />}
                    {gamestate === "quiz" && <Quiz />}
                    {gamestate === "result" && <Result />}
                    {gamestate === "review" && <Review />}
                </QuizContext.Provider>
            </div>
        </div>
    )
}

export default QuizApp
