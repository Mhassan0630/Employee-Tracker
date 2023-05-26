const mysql = require('mysql2');
const inquirer = require('inquirer');
import inquirer from 'inquirer';
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Asdfjk!2',
    database: 'company_db'
});

let roleList = [];
let deptList = [];
let empList = [];
let mgrList = [];

const initialQuestion = [{
    type: 'list',
    name: 'action',
    message: "Select the action you want to perform?",
    choices: [
        'View All Employees', 'Add Employee', 'Update Employee Role', 'Update Employee Manager', 
        'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 
        'View Employees by Manager', 'View Employees by Department', 'Exit'
    ]
}];

function launchApp() {
    console.log(`\n----------------------------------\n|         Employee        |\n|          Manager         |\n----------------------------------`);
    loadRoleList();
}

function loadRoleList() {
    database.query('SELECT id, title FROM role', (error, results) => {
        if (error) throw error;
        roleList = results.map(role => ({ title: role.title, id: role.id }));
        loadDeptList();
    });
}

function loadDeptList() {
    database.query('SELECT name, id FROM department', (error, results) => {
        if (error) throw error;
        deptList = results.map(department => ({ name: department.name, id: department.id }));
        loadEmpList();
    });
}

function loadEmpList() {
    database.query("SELECT concat(employee.first_name,' ',employee.last_name) AS name, id FROM employee", (error, results) => {
        if (error) throw error;
        empList = results.map(employee => ({ name: employee.name, id: employee.id }));
        loadMgrList();
    });
}

function loadMgrList() {
    database.query("SELECT concat(employee.first_name,' ',employee.last_name) AS name, id FROM employee", (error, results) => {
        if (error) throw error;
        mgrList = [{name: "None", id: 0}, ...results.map(manager => ({ name: manager.name, id: manager.id }))];
        executeUserAction();
    });
}

function executeUserAction() {  
    inquirer.prompt(initialQuestion).then(response => {
        switch(response.action) {
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add Employee':
                addNewEmployee();
                break;
            case 'Update Employee Role':
                changeEmployeeRole();
                break;
            case 'Update Employee Manager':
                changeEmployeeManager();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'Add Role':
                addNewRole();
                break;
            case 'View All Departments':
                viewDepartments();
                break;
            case 'Add Department':
                addNewDepartment();
                break;
            case 'View Employees by Manager':
                viewEmployeesByManager();
                break;
            case 'View Employees by Department':
                viewEmployeesByDepartment();
                break;
            default:
                console.log('Goodbye');
        }
    });
}

// Now, you can implement the remaining functions like `viewEmployees`, `addNewEmployee`, `changeEmployeeRole`, `changeEmployeeManager`, `viewRoles`, `addNewRole`, `viewDepartments`, `addNewDepartment`, `view
