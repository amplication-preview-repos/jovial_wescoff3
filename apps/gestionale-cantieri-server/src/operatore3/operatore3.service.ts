import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore3ServiceBase } from "./base/operatore3.service.base";

@Injectable()
export class Operatore3Service extends Operatore3ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
