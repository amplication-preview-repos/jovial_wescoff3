import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore8ServiceBase } from "./base/operatore8.service.base";

@Injectable()
export class Operatore8Service extends Operatore8ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
