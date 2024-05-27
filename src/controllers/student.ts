import { IUser } from "../@types/interfaces";
import { User } from "./user";

export class Student extends User {
  notes: number[];

  constructor(user: IUser) {
    super(user);

    this.notes = [];
  }

  average(): number {
    let total = 0;

    for (const note of this.notes) {
      total += note;
    }

    return total / this.notes.length;
  }
}
