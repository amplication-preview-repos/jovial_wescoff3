import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore30ServiceBase } from "./base/operatore30.service.base";

@Injectable()
export class Operatore30Service extends Operatore30ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
