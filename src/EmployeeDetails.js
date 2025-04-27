import { useParams, useNavigate } from 'react-router-dom'
import useFetch from "./useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

function EmployeeDetails() {
    const { id } = useParams();
    const { employees, error, isLoading } = useFetch(`http://localhost:3001/employees/${id}`);

    const navigate = useNavigate();

    if (isLoading) {
        return <div className="alert alert-info">Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">Error: {error}</div>;
    }

    if (!employees) {
        return <div className="alert alert-warning">No employee data found.</div>;
    }

    return (
        <div className='employeeDetails card m-3 p-3'>
            <div className='card-body'>
                <h1 className='card-title'>Employee Details - {id}</h1>
                <h2 className='card-subtitle mb-2 text-muted'>Name: {employees.name}</h2>
                <h2 className='card-subtitle mb-2 text-muted'>Department: {employees.department}</h2>
                <h2 className='card-subtitle mb-2 text-muted'>Salary: {employees.salary}</h2>
                <p className='card-text'>Details of the employee will be displayed here.</p>
                <button className='btn btn-primary' onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
}

export default EmployeeDetails
