import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore5ServiceBase } from "./base/operatore5.service.base";

@Injectable()
export class Operatore5Service extends Operatore5ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
