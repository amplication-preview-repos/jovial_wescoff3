/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Operatore19 as PrismaOperatore19 } from "@prisma/client";

export class Operatore19ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.Operatore19CountArgs, "select">
  ): Promise<number> {
    return this.prisma.operatore19.count(args);
  }

  async operatore19s(
    args: Prisma.Operatore19FindManyArgs
  ): Promise<PrismaOperatore19[]> {
    return this.prisma.operatore19.findMany(args);
  }
  async operatore19(
    args: Prisma.Operatore19FindUniqueArgs
  ): Promise<PrismaOperatore19 | null> {
    return this.prisma.operatore19.findUnique(args);
  }
  async createOperatore19(
    args: Prisma.Operatore19CreateArgs
  ): Promise<PrismaOperatore19> {
    return this.prisma.operatore19.create(args);
  }
  async updateOperatore19(
    args: Prisma.Operatore19UpdateArgs
  ): Promise<PrismaOperatore19> {
    return this.prisma.operatore19.update(args);
  }
  async deleteOperatore19(
    args: Prisma.Operatore19DeleteArgs
  ): Promise<PrismaOperatore19> {
    return this.prisma.operatore19.delete(args);
  }
}