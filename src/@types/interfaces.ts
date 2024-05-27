import { Student } from "../controllers/student";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface ITeacher {
  postNote(student: Student, note: number): void;
}
