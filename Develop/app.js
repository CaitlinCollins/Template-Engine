const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
const newEmployees = [];

async function questions() {
await inquirer.prompt([
    {
        type: "list",
        name: "role",
        message: `Let's add an employee. What is their role?`,
        choices: ["manager", "engineer", "intern"],
    },
    { 
        type: "input",
        name: "name",
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
]).then( async function(emp) {

if (emp.role === "engineer") {
    await inquirer.prompt([
        {
            type: "input",
            name: "gitHub",
            message: `What is their GitHub username?`,
            default: "Type GitHub username here.",
         },
    ]).then((eng) => {
        const newEngineer = new Engineer(emp.role, emp.name, emp.id, emp.email, eng.gitHub);
        newEmployees.push(newEngineer);
        console.log(newEngineer);
    })
}
    else if (emp.role === "manager") {
        await inquirer.prompt([
            {
                type: "input",
                name: "officeNum",
                message: `What is their office number?`,
                default: "Type office number here.",
             },
    ]).then((man) => {
        const newManager = new Manager(emp.role, emp.name, emp.id, emp.email, man.officeNum);
        newEmployees.push(newManager);
        console.log(newManager);
    })
}
    else if (emp.role === "intern") {
        await inquirer.prompt([
            {
                type: "input",
                name: "school",
                message: `What school do they attend?`,
                default: "Type school here.",
             },
    ]).then((int) => {
        const newIntern = new Intern (emp.role, emp.name, emp.id, emp.email, int.school);
        newEmployees.push(newIntern);
        console.log(newIntern);
    })
    }  
    await inquirer.prompt([
        {
            type: "confirm",
            name: "next2",
            message: `${emp.name} has been added to the roster as a ${emp.role}. Would you like to add another employee?`,
        },
    ])
});
};

async function init() {
await questions();
console.log(newEmployees);
}
init();

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
