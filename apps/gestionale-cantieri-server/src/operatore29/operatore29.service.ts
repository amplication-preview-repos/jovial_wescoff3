import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore29ServiceBase } from "./base/operatore29.service.base";

@Injectable()
export class Operatore29Service extends Operatore29ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
