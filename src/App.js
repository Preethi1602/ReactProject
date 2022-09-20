import React from 'react';
import './App.css';
import { HashRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import FormApp from './Contextform/FormApp';
import Header from './Header';
import JsonApp from './Json-todo/JsonApp';
import WeatherApp from './Weather/WeatherApp';
import ChartApp from './Chart/Chartapp';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApexCharts from 'apexcharts'


const App=() =>{
  return (
    <div className="App">
       <HashRouter>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/Header' element={<Header/>}/>
            <Route path='/crud' element={<FormApp/>}/>
            <Route path='/JsonApp' element={<JsonApp/>}/>
            <Route path='/WeatherApp' element={<WeatherApp/>}/>
            <Route path='/ChartApp' element={<ChartApp/>}/>

        </Routes>
        </HashRouter>
     
      {/* <FormApp/> */}
    </div>
  );
}

export default App;
