import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore1ServiceBase } from "./base/operatore1.service.base";

@Injectable()
export class Operatore1Service extends Operatore1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
