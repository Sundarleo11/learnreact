import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch"

function AddEmployee({ setEmployees }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { employees} = useFetch(
    id ? `http://localhost:3001/employees/${id}` : null
  );

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    if (id && employees) {
      setEmployee(employees);
    }
  }, [id, employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const isIdEmpty = employee.id.trim() === ""; // Check if ID is empty

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Employee added:", data);
        setEmployees((prevEmployees) => [...prevEmployees, data]); // Update the state with the new employee
        navigate(-1); // Navigate back to the previous page after submission
        // Reset form after submission
        /// setEmployee({ id: "", name: "", department: "", salary: "" });
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
    console.log("Employee data submitted:", employee);
  };

  return (
    <div className="container mt-4">
      <h2>Add/Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={employee.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
            disabled={isIdEmpty} // Disable if ID is empty
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
            disabled={isIdEmpty} // Disable if ID is empty
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            id="salary"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            required
            disabled={isIdEmpty} // Disable if ID is empty
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
