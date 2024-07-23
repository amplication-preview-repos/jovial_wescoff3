import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore24ServiceBase } from "./base/operatore24.service.base";

@Injectable()
export class Operatore24Service extends Operatore24ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
