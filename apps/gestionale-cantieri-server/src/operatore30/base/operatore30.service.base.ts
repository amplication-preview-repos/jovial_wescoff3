/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Operatore30 as PrismaOperatore30 } from "@prisma/client";

export class Operatore30ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.Operatore30CountArgs, "select">
  ): Promise<number> {
    return this.prisma.operatore30.count(args);
  }

  async operatore30s(
    args: Prisma.Operatore30FindManyArgs
  ): Promise<PrismaOperatore30[]> {
    return this.prisma.operatore30.findMany(args);
  }
  async operatore30(
    args: Prisma.Operatore30FindUniqueArgs
  ): Promise<PrismaOperatore30 | null> {
    return this.prisma.operatore30.findUnique(args);
  }
  async createOperatore30(
    args: Prisma.Operatore30CreateArgs
  ): Promise<PrismaOperatore30> {
    return this.prisma.operatore30.create(args);
  }
  async updateOperatore30(
    args: Prisma.Operatore30UpdateArgs
  ): Promise<PrismaOperatore30> {
    return this.prisma.operatore30.update(args);
  }
  async deleteOperatore30(
    args: Prisma.Operatore30DeleteArgs
  ): Promise<PrismaOperatore30> {
    return this.prisma.operatore30.delete(args);
  }
}
