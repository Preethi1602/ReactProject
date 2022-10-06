import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FormApp from './Contextform/FormApp';
import Home from "./home";
import JsonApp from './Json-todo/JsonApp';
import WeatherApp from './Weather/WeatherApp';
import QuizApp from './QuizApp/QuizApp';
import PaginationApp from './Pagination/PaginationApp';
// import ChartApp from './Chart/Chartapp';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <HashRouter>  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path='crud' element={<FormApp />} />
          <Route path='/JsonApp' element={<JsonApp />}/>
            <Route path='/JsonApp/TodoJson' element={<JsonApp />} />
            <Route path='/JsonApp/Pagination' element={<PaginationApp/>} />
          {/* </Route> */}
          <Route path='WeatherApp' element={<WeatherApp />} />
          {/* <Route path='/ChartApp' element={<ChartApp/>}/> */}
          <Route path='QuizApp' element={<QuizApp />} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
