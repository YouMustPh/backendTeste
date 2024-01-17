import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { CreateUserService } from "../../services/CreateUserService";

export class CreateUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService(this.userRepository);
    createUserService.execute({ name, email, password });

    return res.status(200).json({});
  }
}
