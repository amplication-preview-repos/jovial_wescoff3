import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CantieriServiceBase } from "./base/cantieri.service.base";

@Injectable()
export class CantieriService extends CantieriServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
