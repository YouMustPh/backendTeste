import { AppError } from "../errors/AppError";
import { IUser } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";


export class FindAllUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<IUser[]> {
    const users = await this.userRepository.findAll();

    if (!users) {
      throw new AppError("Users not found");
    }

    return users;
  }
}
