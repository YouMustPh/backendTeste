import { User } from "../entities/user";
import { AppError } from "../errors/AppError";
import { IUserCreateRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";
import { validateEmail } from "../utils/validate";

export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, password }: IUserCreateRequest): Promise<void> {
    if (!validateEmail(email)) {
      throw new AppError("Invalid email");
    }

    const user = new User({ name, email, password });

    await this.userRepository.create(user.toJSON());
  }
}
