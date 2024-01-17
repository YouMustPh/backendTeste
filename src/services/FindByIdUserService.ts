import { AppError } from "../errors/AppError";
import { IUser, IUserFindByIdRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";

export class FindUserByIdService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id }: IUserFindByIdRequest): Promise<IUser> {
    const result = await this.userRepository.findById(id);

    if (!result) {
      throw new AppError("User not found");
    }

    return result;
  }
}
