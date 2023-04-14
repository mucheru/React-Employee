import React ,{Component, useState,useEffect}from "react";
import EmployeeService from "../services/EmployeeService";
import { Routes, Route, useParams } from 'react-router-dom';

function  ViewEmployeeComponent(){
    let {id} = useParams();
    const [employee, setEmployee] =useState([]);
    
    useEffect(() => {
        EmployeeService.getEmployeeById(id)
        .then((response)=>{
            setEmployee(response.data)
        })
       
    }, [])
    
        return(
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee details</h3>
                    <div className="row">
                        <label>Employee First Name</label>
                        <div>{employee.firstName}</div>

                    </div>
                    <div className="row">
                    <label> Employee Last Name: </label>
                            <div> { employee.lastName }</div>

                    </div>

                    <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> {employee.email }</div>
                    </div>


                </div>
            </div>
        )
    }  
   

export default ViewEmployeeComponent;