class Employee {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
        this.fullName = this.createFullName();
    }

    createFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    changeFirstName(newName) {
        this.firstName = newName;
        this.fullName = this.createFullName();
    }
}

// new Employee('Jim', 'Loser')

// function Employee() {}

export default Employee;