import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore4ServiceBase } from "./base/operatore4.service.base";

@Injectable()
export class Operatore4Service extends Operatore4ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
