import { Module } from "@nestjs/common";
import { LavorazioniModuleBase } from "./base/lavorazioni.module.base";
import { LavorazioniService } from "./lavorazioni.service";
import { LavorazioniController } from "./lavorazioni.controller";
import { LavorazioniResolver } from "./lavorazioni.resolver";

@Module({
  imports: [LavorazioniModuleBase],
  controllers: [LavorazioniController],
  providers: [LavorazioniService, LavorazioniResolver],
  exports: [LavorazioniService],
})
export class LavorazioniModule {}
