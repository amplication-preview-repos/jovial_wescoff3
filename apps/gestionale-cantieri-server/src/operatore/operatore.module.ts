import { Module } from "@nestjs/common";
import { OperatoreModuleBase } from "./base/operatore.module.base";
import { OperatoreService } from "./operatore.service";
import { OperatoreController } from "./operatore.controller";
import { OperatoreResolver } from "./operatore.resolver";

@Module({
  imports: [OperatoreModuleBase],
  controllers: [OperatoreController],
  providers: [OperatoreService, OperatoreResolver],
  exports: [OperatoreService],
})
export class OperatoreModule {}
