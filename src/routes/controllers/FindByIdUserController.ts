import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { FindUserByIdService } from "../../services/FindByIdUserService";

export class FindByIdUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getUserByIdService = new FindUserByIdService(this.userRepository);
    const user = await getUserByIdService.execute({ id });

    return res.json(user);
  }
}
