import { AiFillEdit } from "react-icons/ai"; 
import { useNavigate } from "react-router-dom";
import { FaTrash, FaInfoCircle } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import './App.css';

const Employee = ({ employees, FunctionDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <button onClick={() => navigate('/addEmployee')} className="btn btn-primary mb-3">Add Employee</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(employees) ? employees : []).map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={() => navigate(`/employeeDetails/${emp.id}`)} className="btn btn-info">
                  <FaInfoCircle /> Details
                </button>
              </td>
              <td><button onClick={()=>navigate(`/editEmployee/${emp.id}`)} className="btn btn-warning"><AiFillEdit />Edit</button></td>
              <td>
                <button onClick={() => FunctionDelete(emp.id)} className="btn btn-danger">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employee;
