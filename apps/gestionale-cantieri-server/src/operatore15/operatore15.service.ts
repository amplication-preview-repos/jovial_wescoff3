import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore15ServiceBase } from "./base/operatore15.service.base";

@Injectable()
export class Operatore15Service extends Operatore15ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
