import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore26ServiceBase } from "./base/operatore26.service.base";

@Injectable()
export class Operatore26Service extends Operatore26ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
