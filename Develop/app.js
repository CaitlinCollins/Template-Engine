// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

const managerQuestions = [
    {
        name: "welcome",
        message: "Welcome to your Team Roster Builder! Let's get started!",
    },
    { 
        type: "input",
        name: "managerName",
        message: "Let's start with the manager. What is their name?",

    },
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee id?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?",
    },
    {
        type: "confirm",
        name: "next",
        message: "The manager has been added to the roster. Would you like to add another employee?",
    },
];

const engineerQuestions = [
    { 
        type: "input",
        name: "engineerName",
        message: "Great! Let's add an engineer to the roster! What is their name?",

    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee id?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?",

    },
    {
        type: "confirm",
        name: "next2",
        message: "The engineer has been added to the roster. Would you like to add another employee?",
    },

],

const internQuestions = [
    { 
        type: "input",
        name: "internName",
        message: "Great! Let's add an intern to the roster! What is their name?",

    },
    {
        type: "input",
        name: "internId",
        message: "What is the intern's employee id?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
    },
    {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?",

    },
    {
        type: "confirm",
        name: "next2",
        message: "The engineer has been added to the roster. Would you like to add another employee?",
    },

],


// Write code to use inquirer to gather information about the development team members,
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
