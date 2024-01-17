import { Request, Response, Router } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { FindByIdUserController } from "./controllers/FindByIdUserController";
import { FindByEmailController } from "./controllers/FindByEmailUserController";
import { FindAllUserController } from "./controllers/FindAllUserController";

export const userRouter = Router();

const userRepo = new UserRepository();
const createUserController = new CreateUserController(userRepo);
const deleteUserController = new DeleteUserController(userRepo);
const updateUserController = new UpdateUserController(userRepo);
const findByIdUserController = new FindByIdUserController(userRepo);
const findByEmailController = new FindByEmailController(userRepo);
const findAllUserController = new FindAllUserController(userRepo);

// create user
userRouter.post("/", async (req: Request, res: Response) => {
  return await createUserController.handle(req, res);
});

// get all users
userRouter.get("/", async (req: Request, res: Response) => {
  return await findAllUserController.handle(req, res);
});

// get user by id
userRouter.get("/:id", async (req: Request, res: Response) => {
  return await findByIdUserController.handle(req, res);
});

// get user by email
userRouter.get("/email/:email", async (req: Request, res: Response) => {
  return await findByEmailController.handle(req, res);
});

// update user
userRouter.put("/:id", async (req: Request, res: Response) => {
  return await updateUserController.handle(req, res);
});

// delete user
userRouter.delete("/:id", async (req: Request, res: Response) => {
  return await deleteUserController.handle(req, res);
});
