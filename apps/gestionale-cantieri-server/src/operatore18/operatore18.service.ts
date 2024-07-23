import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Operatore18ServiceBase } from "./base/operatore18.service.base";

@Injectable()
export class Operatore18Service extends Operatore18ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
