export interface User {
  id: string;
  create: Date;
  name: string;
  login: string;
  steamID?: string;
  firstName: string;
  lastName: string;
  birthDate?: Date;
  age?: number;
}
