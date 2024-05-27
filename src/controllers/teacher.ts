import { ITeacher, IUser } from "../@types/interfaces";
import { Student } from "./student";
import { User } from "./user";

export class Teacher extends User implements ITeacher {
  matter: string;

  constructor(user: IUser, matter: string) {
    super(user);

    this.matter = matter;
  }

  private verify(): void {
    if (!this.logged) {
      throw new Error("The teacher is not logged");
    }
  }

  postNote(student: Student, note: number) {
    this.verify();

    student.notes.push(note);
  }
}
