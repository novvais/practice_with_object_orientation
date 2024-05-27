import { IUser } from "../@types/interfaces";

export abstract class User {
  name: string;
  email: string;
  protected password: string;
  protected logged: boolean;

  constructor(user: IUser) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.logged = false;
  }

  login(password: string): void {
    if (password === this.password) {
      this.logged = true;
      return;
    }

    this.logged = false;
    return;
  }
}
