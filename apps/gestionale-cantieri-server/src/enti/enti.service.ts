import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntiServiceBase } from "./base/enti.service.base";

@Injectable()
export class EntiService extends EntiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
