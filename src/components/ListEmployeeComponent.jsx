import React,{ Component,state } from "react";
import EmployeeService from "../services/EmployeeService";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { createBrowserHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';



class ListEmployeeComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            employees:[],

        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res =>{
            this.setState({employees:this.state.employees.filter(employee =>employee.id !==id)}
            )
        })

    }

    viewEmployee(id){
      
        //this.props.window.history.pushState(`/view-employee/${id}`);
       // <Link to ='view-employee/${employee.id}' />
       //console.log(id);
      

    }

    editEmployee(id){
        <Link to='/add-employee/${id}' />

        //const navigate = useNavigate();
       // navigate('/add-employee/${$id}')
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data})
        })
    }
    addEmployee (){
        <Navigate to = "/add-employee" />
    }
    
    render(){
        return(
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <Link className="btn btn-primary" to = "/add-employee">Add Employee</Link>

                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employe Email</th>
                                <th> Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <a href={`view-employee/${employee.id}`}  style={{marginLeft: "10px"}}  >View   </a>
                                     </td>
                                </tr>)}
                        </tbody>

                    </table>

                </div>

            </div>
        )
    }
    
    


}
export default ListEmployeeComponent;


