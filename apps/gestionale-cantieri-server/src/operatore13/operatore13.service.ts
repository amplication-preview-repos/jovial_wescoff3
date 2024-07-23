import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore13ServiceBase } from "./base/operatore13.service.base";

@Injectable()
export class Operatore13Service extends Operatore13ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
