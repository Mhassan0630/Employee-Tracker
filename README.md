# Employee-Tracker

This application is a Content Management Systems (CMS) built using Node.js, Inquirer, and MySQL. It allows a user to manage a company's employee database via the command line.

Database Schema

## Installation


1. Clone this repository to your local machine.
2. Run npm install to install dependencies. Make sure to also have Node.js installed on your machine.
3. Set up the database using the schema provided in the ./assets/images/database_schema.png. If you have MySQL Workbench, you can open and execute the schema.sql file, or you can run mysql -u root -p and enter the schema manually.
4. (Optional) Run npm run seed to populate the database with starter data.

## Usage

To start the server, run the following command in your terminal: node index.js 
Then, follow the inquirer prompts to view and manage the departments, roles, and employees in the company.

## Features
1. View all departments, roles, or employees.
2. Add a department, role, or employee.
3. Delete a department, role, or employee.
4. Update an employee's role.

Walkthrough Video

Here is a walkthrough video demonstrating the application's functionality.

## Contributing
Open to any and all contributions. Please send an email before making any major changes.

License
MIT License