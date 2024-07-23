import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore25ServiceBase } from "./base/operatore25.service.base";

@Injectable()
export class Operatore25Service extends Operatore25ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
