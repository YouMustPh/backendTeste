import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { FindAllUserService } from "../../services/FindAllUserService";

export class FindAllUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const findAllUserService = new FindAllUserService(this.userRepository);

    const users = await findAllUserService.execute();

    return res.json(users);
  }
}
