import { PrismaClient } from "@prisma/client";
import { IUser } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
  async create(user: IUser): Promise<void> {
    await prisma.user.create({
      data: user,
    });
  }
  async update(id: string, user: IUser): Promise<void> {
    await prisma.user.update({
      where: {
        id,
      },
      data: user,
    });
  }
  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }
  async findAll(): Promise<IUser[]> {
    const result = await prisma.user.findMany();
    return result;
  }
  async findById(id: string): Promise<IUser> {
    const result = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!result) {
      throw new Error("User not found");
    }

    return result;
  }
  async findByEmail(email: string): Promise<IUser> {
    const result = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!result) {
      throw new Error("User not found");
    }

    return result;
  }
}
