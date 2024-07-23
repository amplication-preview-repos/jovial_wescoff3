import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore27ServiceBase } from "./base/operatore27.service.base";

@Injectable()
export class Operatore27Service extends Operatore27ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
