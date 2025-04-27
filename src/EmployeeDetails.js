import { useParams } from 'react-router-dom'

function EmployeeDetails() {
    const {id}=useParams();
  return (
    <div className='employeeDetails'>
      <h1>Employee Details - {id}</h1>
      <p>Details of the employee will be displayed here.</p>
    </div>
  )
}

export default EmployeeDetails
