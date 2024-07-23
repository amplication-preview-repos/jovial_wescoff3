import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore14ServiceBase } from "./base/operatore14.service.base";

@Injectable()
export class Operatore14Service extends Operatore14ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
