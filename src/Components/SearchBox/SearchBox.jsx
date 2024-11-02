import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { EmployeeContextInfo } from "../../Context/EmployeeContext";

const SearchBox = () => {
  const { searchText, setSearchText } = useContext(EmployeeContextInfo);

  return (
    <>
      <div className="ml-9 mt-9 w-1/3 relative" title="Employees-search-box">
        {/* react search Icon inside placeholder */}
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-900">
          <CiSearch />
        </span>

        {/* searchbox */}
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          id="text"
          className="bg-transparent border-2 border-black text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default SearchBox;
