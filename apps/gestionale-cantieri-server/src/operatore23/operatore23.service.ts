import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore23ServiceBase } from "./base/operatore23.service.base";

@Injectable()
export class Operatore23Service extends Operatore23ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
