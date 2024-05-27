import { Teacher } from "./controllers/teacher"
import { Student } from "./controllers/student"

const edu =  {
    name: "Eduardo",
    email: "edu@gmail.com",
    password: "12345"
}

const duda = {
    name: "Eduarda",
    email: "duda@gmail.com",
    password: "123456"
}

const teacherEdu = new Teacher(edu, "Maths")
const studentDuda = new Student(duda)

teacherEdu.login("12345")
teacherEdu.postNote(studentDuda, 8)
teacherEdu.postNote(studentDuda, 5)
teacherEdu.postNote(studentDuda, 9)
teacherEdu.postNote(studentDuda, 6)

console.log(studentDuda.average())
console.log(studentDuda.notes)
