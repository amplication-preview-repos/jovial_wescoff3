/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Operatore15 as PrismaOperatore15 } from "@prisma/client";

export class Operatore15ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.Operatore15CountArgs, "select">
  ): Promise<number> {
    return this.prisma.operatore15.count(args);
  }

  async operatore15s(
    args: Prisma.Operatore15FindManyArgs
  ): Promise<PrismaOperatore15[]> {
    return this.prisma.operatore15.findMany(args);
  }
  async operatore15(
    args: Prisma.Operatore15FindUniqueArgs
  ): Promise<PrismaOperatore15 | null> {
    return this.prisma.operatore15.findUnique(args);
  }
  async createOperatore15(
    args: Prisma.Operatore15CreateArgs
  ): Promise<PrismaOperatore15> {
    return this.prisma.operatore15.create(args);
  }
  async updateOperatore15(
    args: Prisma.Operatore15UpdateArgs
  ): Promise<PrismaOperatore15> {
    return this.prisma.operatore15.update(args);
  }
  async deleteOperatore15(
    args: Prisma.Operatore15DeleteArgs
  ): Promise<PrismaOperatore15> {
    return this.prisma.operatore15.delete(args);
  }
}