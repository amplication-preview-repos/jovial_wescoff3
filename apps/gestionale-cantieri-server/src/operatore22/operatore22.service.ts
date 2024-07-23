import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore22ServiceBase } from "./base/operatore22.service.base";

@Injectable()
export class Operatore22Service extends Operatore22ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
