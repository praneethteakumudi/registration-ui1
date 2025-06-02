export interface AppUser {
  id?: number;       // optional, for update or get operations
  name: string;
  email: string;
  password: string;
}
