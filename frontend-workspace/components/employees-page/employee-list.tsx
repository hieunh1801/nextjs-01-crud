import { NextPage } from "next";
import { Employee } from "interfaces/employee";
import { useEffect, ReactNode } from "react";

type Props = {
  employees: Employee[],
  selectEmployee?: Function
}

const EmployeeList: React.FunctionComponent<Props> = ({ employees, selectEmployee }) => {
  const renderEmployeeData: ReactNode = employees.map(item => {
    return (
      <div onClick={() => selectEmployee(item)}
        key={item.id}>
        {item.id}
        {item.full_name}
      </div>
    );
  });
  return (
    <div>
      {renderEmployeeData}
    </div>
  )
}

export default EmployeeList;