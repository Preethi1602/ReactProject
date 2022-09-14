import React from 'react';
//import './App.css';
import Forms from './Forms';
import Display from './Display'; 
import { FormProvider } from './FormContext';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormApp=() =>{
  return (
    <div className="FormApp"style={{backgroundColor:"lightcyan"}}>
      <FormProvider >
      <Header/>
        <Forms />
      <Display/>
      </FormProvider>
    </div>
  );
}

export default FormApp;
