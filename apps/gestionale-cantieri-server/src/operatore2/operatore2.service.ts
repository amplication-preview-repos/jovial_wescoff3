import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore2ServiceBase } from "./base/operatore2.service.base";

@Injectable()
export class Operatore2Service extends Operatore2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
