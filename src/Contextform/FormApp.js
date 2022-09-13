import React from 'react';
//import './App.css';
import Forms from './Forms';
import Display from './Display'; 
import { FormProvider } from './FormContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormApp=() =>{
  return (
    <div className="App"style={{backgroundColor:"lightcyan"}}>
      <FormProvider >
        <Forms />
      <Display/>
      </FormProvider>
    </div>
  );
}

export default FormApp;
