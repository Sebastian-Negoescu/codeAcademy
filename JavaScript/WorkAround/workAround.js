/*
WorkAround is a human resources program that returns basic information about an employee, based on salary data. Using WorkAround, one can use an employee's salary data to:

return the cadre of the of the employee, in other words, whether this employee is entry level, mid level, or senior level.
calculate employee tax rates
return employee benefits
calculate employee bonuses
calculate the total amount an employee can be reimbursed based on the total value of their health, housing, or wellness benefits

WorkAround currently contains the data and functions in a single file, though they would like to modify the program so it makes use of JavaScript modules. 
Specifically, WorkAround you to demonstrate the different ways to export and import modules.

If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.
https://www.youtube.com/watch?v=8_31Uq3a77w

*/

import {Employee, payGrades, getCadre, calcTax, getBenefits, calcBonus, reimbursementEligibility} from './employee';

function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + getCadre());
    console.log('Tax: ' + calcTax());
    console.log('Benefits: ' + getBenefits());
    console.log('Bonus: ' + calcBonus());
    console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
  }
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);