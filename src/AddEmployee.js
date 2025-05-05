import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";
import { addEmployee, updateEmployee } from "./api";
import notify from "./notification"; // Import notify utility

function AddEmployee({ setEmployees }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { employees } = useFetch(
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = id
        ? await updateEmployee(id, employee)
        : await addEmployee(employee);

      if (id) {
        setEmployees((prevEmployees) =>
          prevEmployees.map((emp) => (emp.id === id ? data : emp))
        );
        notify.success("Employee updated successfully");
      } else {
        setEmployees((prevEmployees) => [...prevEmployees, data]);
        notify.success("Employee added successfully");
      }

      navigate(-1); // Navigate back to the previous page after submission
    } catch (error) {
      console.error("Error submitting employee data:", error);
      notify.error("Error submitting employee data: " + error.message);
    }
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
            disabled={!!id} // Disable ID field if editing
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
