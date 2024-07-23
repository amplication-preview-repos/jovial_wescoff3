import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore10ServiceBase } from "./base/operatore10.service.base";

@Injectable()
export class Operatore10Service extends Operatore10ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
