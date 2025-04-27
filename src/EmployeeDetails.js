import { useParams } from 'react-router-dom'
import useFetch from "./useFetch";

function EmployeeDetails() {
    const { id } = useParams();
    const { employees, error, isLoading } = useFetch(`http://localhost:3001/employees/${id}`);

    if (isLoading) {
        return <div style={{ textAlign: 'center', color: '#555', fontSize: '18px', marginTop: '20px' }}>Loading...</div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', color: 'red', fontSize: '18px', marginTop: '20px' }}>Error: {error}</div>;
    }

    if (!employees) {
        return <div style={{ textAlign: 'center', color: '#555', fontSize: '18px', marginTop: '20px' }}>No employee data found.</div>;
    }

    return (
        <div className='employeeDetails'>
            <h1>Employee Details - {id}</h1>
            <h2>Name: {employees.name}</h2>
            <h2>Department: {employees.department}</h2>
            <h2>Salary: {employees.salary}</h2>
            <p>Details of the employee will be displayed here.</p>
        </div>
    );
}

export default EmployeeDetails
