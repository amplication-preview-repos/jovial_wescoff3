import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LavorazioniServiceBase } from "./base/lavorazioni.service.base";

@Injectable()
export class LavorazioniService extends LavorazioniServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
