import { Module } from "@nestjs/common";
import { Operatore16ModuleBase } from "./base/operatore16.module.base";
import { Operatore16Service } from "./operatore16.service";
import { Operatore16Controller } from "./operatore16.controller";
import { Operatore16Resolver } from "./operatore16.resolver";

@Module({
  imports: [Operatore16ModuleBase],
  controllers: [Operatore16Controller],
  providers: [Operatore16Service, Operatore16Resolver],
  exports: [Operatore16Service],
})
export class Operatore16Module {}
