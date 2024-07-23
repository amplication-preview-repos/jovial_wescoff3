import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore12ServiceBase } from "./base/operatore12.service.base";

@Injectable()
export class Operatore12Service extends Operatore12ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
