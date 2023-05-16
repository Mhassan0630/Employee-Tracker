const mysql = require('mysql2');
const inquirer = require('inquirer');

const database = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: Mh4k4f8f,d,
        database: 'company_db'
    },
);

let roleDetails = [];
let departmentDetails = [];
let employeeDetails = [];
let managerDetails = [];

const initialOptions = [
    {
        type: 'list',
        name: 'initial',
        message: "What operation do you want to perform?",
        choices: ['Display All Employees', 'Add New Employee', 'Edit Employee Role', 
        'Edit Employee Manager', 'Display All Roles', 'Add New Role', 'Display All Departments', 'Add New Department', 
        'Display Employees by Manager', 'Display Employees by Department', 'Exit']
    }
];

initializeApplication();

function initializeApplication() {
    console.log("----------------------------------\n|         Employee Dashboard     |\n----------------------------------");
    populateRoleDetails();   
};

function populateRoleDetails() {
    database.query('SELECT id, title FROM role', function (error, results) {
        if (error) throw error;
        results.forEach(result => roleDetails.push({
            title: result.title,
            id: result.id
        }));
        populateDepartmentDetails()
    })
};

function populateDepartmentDetails() {
    database.query('SELECT name, id FROM department', function (error, results) {
        if (error) throw error;
        results.forEach(result => departmentDetails.push({
            name: result.name,
            id: result.id
        }));
        populateEmployeeDetails()
    })
};

function populateEmployeeDetails() {
    database.query("SELECT concat(employee.first_name,' ',employee.last_name) AS name, id FROM employee", function (error, results) {
        if (error) throw error;
        results.forEach(result => employeeDetails.push({
            name: result.name,
            id: result.id
        }));
        populateManagerDetails()
    })
};
