import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore9ServiceBase } from "./base/operatore9.service.base";

@Injectable()
export class Operatore9Service extends Operatore9ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
