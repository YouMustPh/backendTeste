import { AppError } from "../errors/AppError";
import { IUserDeleteRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";

export class DeleteUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id }: IUserDeleteRequest): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("User not found");
    }

    await this.userRepository.delete(id);
  }
}
