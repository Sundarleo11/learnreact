import React from "react";
import Employee from "./Employee";

const StatusDisplay = ({ error, isLoading, employees, FunctionDelete }) => {
  return (
    <div className="status-container">
      {error && <h4 className="error-message">{error}</h4>}
      {isLoading && <h4 className="loading-message">Loading...</h4>}
      {employees && (
        <div className="employee-container">
          <Employee employees={employees} FunctionDelete={FunctionDelete} />
        </div>
      )}
    </div>
  );
};

export default StatusDisplay;