import { Module } from "@nestjs/common";
import { CantieriModuleBase } from "./base/cantieri.module.base";
import { CantieriService } from "./cantieri.service";
import { CantieriController } from "./cantieri.controller";
import { CantieriResolver } from "./cantieri.resolver";

@Module({
  imports: [CantieriModuleBase],
  controllers: [CantieriController],
  providers: [CantieriService, CantieriResolver],
  exports: [CantieriService],
})
export class CantieriModule {}
