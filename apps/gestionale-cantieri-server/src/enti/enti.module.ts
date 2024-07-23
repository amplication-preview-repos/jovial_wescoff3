import { Module } from "@nestjs/common";
import { EntiModuleBase } from "./base/enti.module.base";
import { EntiService } from "./enti.service";
import { EntiController } from "./enti.controller";
import { EntiResolver } from "./enti.resolver";

@Module({
  imports: [EntiModuleBase],
  controllers: [EntiController],
  providers: [EntiService, EntiResolver],
  exports: [EntiService],
})
export class EntiModule {}
