import React, { useContext } from "react";
import { EmployeeContextInfo } from "../../Context/EmployeeContext";

const Cards = () => {

  const { filteredEmployees } = useContext(EmployeeContextInfo);
  return (
    <>
      {filteredEmployees && filteredEmployees.length > 0 ? (
        <>
          {filteredEmployees.map((employee, index) => (
            <>
              {/* Employee information Cards Mapped */}
              <div
                className="w-full max-w-lg  rounded-lg shadow employe-card"
                key={index}
                title="Employee-card-information"
              >
                {/* Each employee informations */}
                <div className="flex flex-col items-center pb-20 px-4">
                  <div className="flex gap-9 pb-14">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={employee.profileImg}
                      alt="Profile image"
                      title="Employee-profile-picture"
                    />
                    <div className="employeeInfoSection text-wrap">
                      <h5 className="mb-1 text-2xl font-medium text-gray-900">
                        {employee.name}
                      </h5>
                      <span className="text-sm font-semibold text-gray-500">
                        {employee.designation}
                      </span>
                      <h5 className="text-sm text-gray-700 block pt-5">
                        Email : {employee.emailId}
                      </h5>
                    </div>
                  </div>

                  {/* Cards Buttons */}
                  <div className="flex mt-4 md:mt-6 absolute bottom-8">
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-transparent border-2 border-black rounded-lg hover:bg-black hover:text-white w-20">
                      Block
                    </button>
                    <button className="py-2 px-4 ms-2 text-sm font-medium focus:outline-none bg-black text-white rounded-lg w-20 text-center">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      ) : (
        <h1>No Data</h1>
      )}
    </>
  );
};

export default Cards;
