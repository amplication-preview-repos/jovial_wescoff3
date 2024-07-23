import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore7ServiceBase } from "./base/operatore7.service.base";

@Injectable()
export class Operatore7Service extends Operatore7ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
