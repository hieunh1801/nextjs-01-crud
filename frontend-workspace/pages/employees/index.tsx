import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NextPage, GetStaticProps, NextPageContext } from 'next';

import EmployeeSearch from 'components/employees-page/employee-search';
import EmployeeList from 'components/employees-page/employee-list';
import EmployeeDetail from 'components/employees-page/employee-detail';
import fetch from 'isomorphic-unfetch';

import { Employee } from 'interfaces/employee';
import * as employeeService from '../api/employee-service';

type Props = {
  employees: Employee[]
}

const useStyles = makeStyles(() =>
  createStyles({
    employeePageRoot: {
      minHeight: 100,
      backgroundColor: "#F5F5F5"
    }
  }))

const EmployeesPage: NextPage<Props> = ({ employees }: Props) => {

  const defaultEmployeeState: Employee = {
    id: 0,
    full_name: "",
    date_of_bird: new Date(),
    gender: 0,
    mail: "",
    company_id: 1
  }
  const classes = useStyles();
  const [employeeSelected, setEmployeeSelected] = useState<Employee>(employees[0] ? employees[0] : defaultEmployeeState);
  function handleSelectEmployee(employee) {
    setEmployeeSelected(employee)
  }
  return (
    <div className={classes.employeePageRoot}>
      <div>Welcome to NextJS CRUD</div>
      <div>
        <EmployeeDetail
          employee={employeeSelected}
        />

        <EmployeeSearch />

        <EmployeeList
          employees={employees}
          selectEmployee={handleSelectEmployee}
        />
      </div>
    </div>
  );
}

EmployeesPage.getInitialProps = async (_: NextPageContext) => {
  const employees = await employeeService.getEmployee(20, 1)
  await console.log(employees)
  return {
    employees
  }
}
export default EmployeesPage;