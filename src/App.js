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

function App() {
  const { employees, isLoading, error, setEmployees } = useFetch(
    "http://localhost:3001/employees"
  );

  const FunctionDelete = (id) => {
    const newEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(newEmployees);
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
        <Route path="/addEmployee" element={<AddEmployee setEmployees={setEmployees} />} />
        <Route path="/editEmployee/:id" element={<AddEmployee setEmployees={setEmployees} />} />
      </Routes>
    </div>
  );
}

export default App;
