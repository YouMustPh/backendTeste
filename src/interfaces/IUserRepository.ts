import { IUser } from "./IUserInterfaces";

export interface IUserRepository {
  create(user: IUser): Promise<void>;
  update(id: string, user: IUser): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
}
