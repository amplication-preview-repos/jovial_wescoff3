import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore19ServiceBase } from "./base/operatore19.service.base";

@Injectable()
export class Operatore19Service extends Operatore19ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
