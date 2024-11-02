import React, { useState } from "react";
import Cards from "../Cards/Cards";
import SearchBox from "../SearchBox/SearchBox";


const EmployesInfo = () => {
  const [allbtn, setAllbtn] = useState(true);
  const [activebtn, setActivebtn] = useState(false);
  const [inactivebtn, setInactivebtn] = useState(false);

  const handleAllBtn = () => {
    setAllbtn(true);
    setActivebtn(false);
    setInactivebtn(false);
  };

  const handleActiveBtn = () => {
    setActivebtn(true);
    setAllbtn(false);
    setInactivebtn(false);
  };

  const handleInactiveBtn = () => {
    setInactivebtn(true);
    setActivebtn(false);
    setAllbtn(false);
  };
  return (
    <>
      {/* search box for employees */}
      <SearchBox />

      {/* Heading and filter buttons */}
      <div className="max-w-screen-2xl mx-auto p-5 sm:p-10">
        <div className="mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2  ">
            <h1 className="text-4xl font-bold text-black 2">Employees</h1>
          </div>
          <span title="Employees-filter-button">
          <button
              onClick={handleAllBtn}
              className={`p-2 font-semibold px-4 w-20 rounded-2xl m-3 shadow-lg ${
                allbtn ? "bg-blue-600 text-white" : "bg-transparent text-black"
              }`}
            >
              All
            </button>
            <button
              onClick={handleActiveBtn}
              className={`p-2 font-semibold px-4 w-20 rounded-2xl m-3 shadow-lg ${
                activebtn ? "bg-blue-600 text-white" : "bg-transparent text-black"
              }`}
            >
              Active
            </button>
            <button
              onClick={handleInactiveBtn}
              className={`p-2 font-semibold px-4 w-20 rounded-2xl m-3 shadow-lg ${
                inactivebtn ? "bg-blue-600 text-white" : "bg-transparent text-black"
              }`}
            >
              Inactive
            </button>
          </span>
        </div>

        {/* employees Cards Component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default EmployesInfo;
