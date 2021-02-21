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
const employees = [];

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
        // and to create objects for each team member (using the correct classes as blueprints!)
        const newEngineer = new Engineer(emp.name, emp.id, emp.email, eng.github);
        employees.push(newEngineer);
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
        // and to create objects for each team member (using the correct classes as blueprints!)
        const newManager = new Manager(emp.name, emp.id, emp.email, man.officeNumber);
        employees.push(newManager);
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
        // and to create objects for each team member (using the correct classes as blueprints!)
        const newIntern = new Intern (emp.name, emp.id, emp.email, int.school);
        employees.push(newIntern);
        console.log(newIntern);
    })
    }  
    await inquirer.prompt([
        {
            type: "confirm",
            name: "plus",
            message: `${emp.name} has been added to the roster as a ${emp.role}. Would you like to add another employee?`,
        },
    ]).then((add) => {
        if (add.plus === true) {
            questions();
        }
        else {
            console.log(employees);
            //call the `render` function and pass in an array containing all employee objects
            render(employees);
            writeHtml();
            return;
        }
    })
});
};

// Write it to a file named `team.html` 
function writeHtml(){
    fs.writeFile(outputPath, render(employees), (err)  => 
    err ? console.log(err) : console.log("Team.html written!"));
};

// Initialize app
async function init() {
await questions();
}
init();




