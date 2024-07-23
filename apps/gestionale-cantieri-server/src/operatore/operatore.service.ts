import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OperatoreServiceBase } from "./base/operatore.service.base";

@Injectable()
export class OperatoreService extends OperatoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
