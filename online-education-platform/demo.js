import Student from "./models/Student.js";
import Instructor from "./models/Instructor.js";

// Creating instances
const student1 = new Student("John Doe", "john@example.com", "S123");
const instructor1 = new Instructor("Dr. Smith", "smith@example.com", "I456");

// Demonstrating functionality
student1.getDetails();
student1.enroll();

instructor1.getDetails();
instructor1.assignGrade();
