// TODO: Write code to define and export the Employee class
class Employee {
    contructor(empName, id, email, role) {
        this.empName = empName;
        this.id = id; 
        this.email = email; 
    }
    getName() {
       return this.empName;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;

    }
    getRole() {
        const role = "Employee"
        return role;
    }
}

module.exports = Employee;