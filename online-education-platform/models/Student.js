import User from "./User.js";

class Student extends User {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }

    enroll() {
        console.log(`Student ${this.name} has enrolled.`);
    }
}

export default Student;
