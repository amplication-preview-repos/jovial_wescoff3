import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore28ServiceBase } from "./base/operatore28.service.base";

@Injectable()
export class Operatore28Service extends Operatore28ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
