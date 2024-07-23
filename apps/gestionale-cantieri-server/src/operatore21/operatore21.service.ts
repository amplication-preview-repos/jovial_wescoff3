import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore21ServiceBase } from "./base/operatore21.service.base";

@Injectable()
export class Operatore21Service extends Operatore21ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
