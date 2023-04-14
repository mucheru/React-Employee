import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent'
import { Routes, Route } from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    
  <>
  <Routes>
  <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
  <Route path = "/" element = {<ListEmployeeComponent/>}></Route>
  <Route path = "/add-employee" element = {<CreateEmployeeComponent/>}></Route>
  <Route path='view-employee/:id' element={<ViewEmployeeComponent/>}/>

  </Routes>
  </>
    
    
  );
}

export default App;
