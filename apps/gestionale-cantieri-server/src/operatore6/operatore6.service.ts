import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore6ServiceBase } from "./base/operatore6.service.base";

@Injectable()
export class Operatore6Service extends Operatore6ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
