import { User } from "../entities/user";
import { AppError } from "../errors/AppError";
import { IUserUpdateRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";
import { validateEmail } from "../utils/validate";

export class UpdateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    id,
    email,
    name,
    password,
  }: IUserUpdateRequest): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (email && !validateEmail(email)) {
      throw new AppError("Invalid email");
    }

    const newUser = new User(
      {
        name: name || user.name,
        email: email || user.email,
        password: password || user.password,
      },
      id
    );

    await this.userRepository.update(id, newUser.toJSON());
  }
}
