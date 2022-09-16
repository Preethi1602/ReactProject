import React from 'react';
import './App.css';
import { HashRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import FormApp from './Contextform/FormApp';
import Header from './Header';
import JsonApp from './Json-todo/JsonApp';
import WeatherApp from './Weather/WeatherApp';
import 'bootstrap/dist/css/bootstrap.min.css';


const App=() =>{
  return (
    <div className="App">
       <HashRouter>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/Header' element={<Header/>}/>
            <Route path='/FormApp' element={<FormApp/>}/>
            <Route path='/JsonApp' element={<JsonApp/>}/>
            <Route path='/WeatherApp' element={<WeatherApp/>}/>

        </Routes>
        </HashRouter>
     
      {/* <FormApp/> */}
    </div>
  );
}

export default App;
