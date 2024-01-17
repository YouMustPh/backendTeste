import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser } from "../../interfaces/IUserInterfaces";
import { UpdateUserService } from "../../services/UpdateUserService";

export class UpdateUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, password }: IUser = req.body;

    const updateUserService = new UpdateUserService(this.userRepository);
    await updateUserService.execute({ id, name, email, password });

    return res.status(200).json({});
  }
}
