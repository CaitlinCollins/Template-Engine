// TODO: Write code to define and export the Employee class
class Employee {
    contructor(empName, id, email) {
        this.name = empName;
        this.id = id; 
        this.email = email; 
    }
    getName() {
       return this.name;
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