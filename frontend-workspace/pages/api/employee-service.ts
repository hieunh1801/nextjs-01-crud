import { Employee } from "interfaces/employee";
const fetch = require("node-fetch");

async function getEmployee(page_size: number, page_number: number): Promise<Employee[]> {
  const url = `http://localhost:5000/employees?_limit=${page_size}&_page=${page_number}`
  try {
    const response = await fetch(url)
    const employees = await response.json()
    await console.log(employees)
    return employees
  } catch (error) {
    console.log("error get_employee", error)
    return []
  }
};

async function postEmployee(page_size: number, page_number: number): Promise<Employee[]> {
  const url = `http://localhost:5000/employees?_limit=${page_size}&_page=${page_number}`
  try {
    const response = await fetch(url)
    const employees = await response.json()
    await console.log(employees)
    return employees
  } catch (error) {
    console.log("error get_employee", error)
    return []
  }
};

export { getEmployee, postEmployee }