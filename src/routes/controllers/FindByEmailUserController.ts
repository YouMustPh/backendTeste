import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { FindByEmailUserService } from "../../services/FindByEmailUserService";

export class FindByEmailController {
  constructor(private userRepository: IUserRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;

    const findByEmailService = new FindByEmailUserService(this.userRepository);
    const user = await findByEmailService.execute({email});

    return res.json(user);
  }
}
