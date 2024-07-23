import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LavoroServiceBase } from "./base/lavoro.service.base";

@Injectable()
export class LavoroService extends LavoroServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
