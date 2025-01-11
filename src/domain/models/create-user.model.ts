export class CreateUserModel {
  constructor(public email: string,
              public userName: string,
              public password: string,
              public registration: string,
              public application: string) {}
}