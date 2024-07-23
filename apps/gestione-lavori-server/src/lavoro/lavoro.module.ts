import { Module } from "@nestjs/common";
import { LavoroModuleBase } from "./base/lavoro.module.base";
import { LavoroService } from "./lavoro.service";
import { LavoroController } from "./lavoro.controller";
import { LavoroResolver } from "./lavoro.resolver";

@Module({
  imports: [LavoroModuleBase],
  controllers: [LavoroController],
  providers: [LavoroService, LavoroResolver],
  exports: [LavoroService],
})
export class LavoroModule {}
