import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore16ServiceBase } from "./base/operatore16.service.base";

@Injectable()
export class Operatore16Service extends Operatore16ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
