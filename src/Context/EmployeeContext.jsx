import React, { createContext, useState } from "react";
import employeeData from "../EmployeeData/DataEmployees.json";

export const EmployeeContextInfo = createContext();

export const EmployeeContext = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [data] = useState(employeeData);

  const filteredEmployees = data.filter((employee) => {
    if (
      searchText &&
      !employee.name.toLowerCase().includes(searchText.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <EmployeeContextInfo.Provider
      value={{
        searchText,
        setSearchText,
        filteredEmployees,
      }}
    >
      {children}
    </EmployeeContextInfo.Provider>
  );
};
