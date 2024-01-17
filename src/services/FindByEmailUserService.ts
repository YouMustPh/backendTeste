import { AppError } from "../errors/AppError";
import { IUser, IUserFindByEmailRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";

export class FindByEmailUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email }: IUserFindByEmailRequest): Promise<IUser> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User not found");
    }

    return user;
  }
}
