export class User {
  login: string;
  password: string;
  email: string;
  name: string;
  surename: string;
  userId?: number;
  punkty?: number;
  aktywny ?= false;
  followy?: Array<User>;

  constructor() {
    this.followy = [];
  }
}
