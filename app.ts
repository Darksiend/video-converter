class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Anton");

console.log(user);

user.name = "Dima";

console.log(user);
