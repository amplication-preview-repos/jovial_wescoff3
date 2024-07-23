import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore20ServiceBase } from "./base/operatore20.service.base";

@Injectable()
export class Operatore20Service extends Operatore20ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
