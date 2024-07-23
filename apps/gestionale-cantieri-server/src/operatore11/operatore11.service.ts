import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore11ServiceBase } from "./base/operatore11.service.base";

@Injectable()
export class Operatore11Service extends Operatore11ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
