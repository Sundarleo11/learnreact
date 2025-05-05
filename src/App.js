import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import useFetch from "./useFetch";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import StatusDisplay from "./StatusDisplay";
import EmployeeDetails from "./EmployeeDetails";
import AddEmployee from "./AddEmployee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "./notification";
import { deleteEmployee } from "./api";

function App() {
  const { employees, isLoading, error, setEmployees } = useFetch(
    "http://localhost:3001/employees"
  );

  const FunctionDelete = (id) => {
    deleteEmployee(id)
      .then(() => {
        notify.success("Employee deleted successfully");
        const employeesList = employees.filter((emp) => emp.id !== id);
        setEmployees(employeesList);
      })
      .catch((error) => {
        notify.error("Error deleting employee: " + error.message);
      });
  };

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/employee"
          element={
            <StatusDisplay
              error={error}
              isLoading={isLoading}
              employees={employees}
              FunctionDelete={FunctionDelete}
            />
          }
        />
        <Route path="/employeeDetails/:id" element={<EmployeeDetails />} />
        <Route
          path="/addEmployee"
          element={<AddEmployee setEmployees={setEmployees} />}
        />
        <Route
          path="/editEmployee/:id"
          element={<AddEmployee setEmployees={setEmployees} />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
