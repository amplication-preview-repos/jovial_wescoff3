import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore17ServiceBase } from "./base/operatore17.service.base";

@Injectable()
export class Operatore17Service extends Operatore17ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
