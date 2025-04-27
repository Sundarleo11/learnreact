import {  useNavigate } from "react-router-dom";
import { FaTrash, FaInfoCircle } from 'react-icons/fa';
import './App.css';

const Employee = ({ employees, FunctionDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="center-table">
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">Employee ID</th>
            <th className="table-header">Name</th>
            <th className="table-header">Department</th>
            <th className="table-header">Salary</th>
            <th className="table-header">Action</th>
            <th className="table-header">Delete</th>
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(employees) ? employees : []).map((emp) => (
            <tr key={emp.id}>
              <td className="table-cell">{emp.id}</td>
              <td className="table-cell">{emp.name}</td>
              <td className="table-cell">{emp.department}</td>
              <td className="table-cell">{emp.salary}</td>
             {/* <td className="table-cell">
                <Link to={`/employeeDetails/${emp.id}`}>
                  <FaInfoCircle className="icon-details" />Details
                </Link>
              </td>*/}
              <td className="table-cell">
                <button onClick={() => navigate(`/employeeDetails/${emp.id}`)} className="icon-details">
                  <FaInfoCircle />Details
                </button>
              </td>
              <td className="table-cell">
                <button onClick={() => FunctionDelete(emp.id)} className="icon-delete">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
