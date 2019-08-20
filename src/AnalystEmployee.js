import Employee from './Employee';

class AnalystEmployee extends Employee {
    constructor(first, last) {
        super(first, last);

        this.jobTitle = 'Entry Analyst';
    }

    promote() {
        if (this.jobTitle === 'Entry Analyst') {
            this.jobTitle = 'Analyst';
        }
    }

}

export default AnalystEmployee;