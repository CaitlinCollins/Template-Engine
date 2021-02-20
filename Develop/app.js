// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
inquirer.prompt([
    {
        type: "list",
        name: "role",
        message: `Let's add an employee. What is their role?`,
        choices: ["manager", "engineer", "intern"],
    },
    { 
        type: "input",
        name: "empName",
        message: "What is the their name?",
        default: "Type name here.",
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee id?",
        default: "Type id here.",
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address?",
        default: "Type email address here.",
        // validate: validateEmail(),
    },
]).then((emp) => {
    console.log(emp);
    const newEmployee = new Employee(empName, id, email, role);
    console.log(newEmployee);
});
        


// switch(role)
//     {
//         type: "confirm",
//         name: "next2",
//         message: `${this.name} has been added to the roster as a ${this.role}. Would you like to add another employee?`,
//     },
// ],

// inquirer.prompt(employeeQuestions) 

// const managerQuestions = [
//     {
//         type: "input",
//         name: "officeNum",
//         message: `What is ${this.name}'s office number?`,
//         default: "Type office number here.",
//     },
// ];

// const engineerQuestions = [
//     {
//         type: "input",
//         name: "gitHub",
//         message: `What is ${this.name}'s GitHub username?`,
//         default: "Type GitHub username here.",

//     },
// ],

// const internQuestions = [
//     {
//         type: "input",
//         name: "school",
//         message: `What school does ${this.name} attend?`,
//         default: "Type school here.",

//     },
// ],

// function writeEmployee() {
//     inquirer.prompt(employeeQuestions)
//     .then((data) => {
//         const employee = {
//             empName : data.name,
//             id : data.id,
//             email : data.email
//         }
//         console.log(employee);
//         return employee;
//     })
// }
// writeEmployee()

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
