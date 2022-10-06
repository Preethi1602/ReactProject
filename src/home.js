import React from "react";
import Header from "./Header";
import img from './img1.png'

const Home=()=>{
    return(
        <div className="Home">
            <Header/>
              <img src={img}style={{width:"100%",height:"650px"}}></img>
        </div>
    )
}
export default Home;