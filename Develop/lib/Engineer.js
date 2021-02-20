// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    costructor(gitHub) {
    super(empName, id, email);
    this.gitHub = gitHub;
    }
    getGitHub() {

    }
    getRole() {
        return "Engineer";
    }
}