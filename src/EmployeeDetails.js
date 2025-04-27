import { useParams, useNavigate } from 'react-router-dom'
import useFetch from "./useFetch";

function EmployeeDetails() {
    const { id } = useParams();
    const { employees, error, isLoading } = useFetch(`http://localhost:3001/employees/${id}`);

    const navigate = useNavigate();

    if (isLoading) {
        return <div className="message loading">Loading...</div>;
    }

    if (error) {
        return <div className="message error">Error: {error}</div>;
    }

    if (!employees) {
        return <div className="message no-data">No employee data found.</div>;
    }

    return (
        <div className='employeeDetails'>
            <h1>Employee Details - {id}</h1>
            <h2>Name: {employees.name}</h2>
            <h2>Department: {employees.department}</h2>
            <h2>Salary: {employees.salary}</h2>
            <p>Details of the employee will be displayed here.</p>
            <button className='btn btn-primary' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default EmployeeDetails
