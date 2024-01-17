import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { DeleteUserService } from "../../services/DeleteUserService";

export class DeleteUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUserService = new DeleteUserService(this.userRepository);
    await deleteUserService.execute({ id });

    return res.status(200).json({});
  }
}
